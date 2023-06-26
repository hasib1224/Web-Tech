/*
 * Title: data file
 * Description: to handle the file system
 * Author: Hasib Abdullah Sarker
 * Date:24/06/23
 */


//dependencies
const fs =require('fs');
const path=require('path');

//scaffolding
const lib={};

//base directory of the data folder
lib.basedir = path.join(__dirname,'/../.data/');

//write data to file
lib.create=function(dir,file,data,callback){
    //open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`,'wx',(err,fileDescriptor)=>{
        if(!err && fileDescriptor){
            //convert data to string
            const stringData =JSON.stringify(data);

            //Write data to file then close
            fs.writeFile(fileDescriptor,stringData,(err2)=>{
                if(!err2){
                    fs.close(fileDescriptor,(err3)=>{
                        if(!err3){
                            callback(false);
                        }else{
                            callback('Error closing the file!!');
                        }
                    });
                }else{
                    callback('Error writing to file');
                }
            })
        }else {
            callback('There is an error! File Already Exists ');

        }

    });
};


lib.read = (dir,file,callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`,'utf8',(err,data)=>{
        callback(err,data);

    });

};


lib.update=(dir,file,data,callback)=>{
    //file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`,'r+',(err,fileDescriptor)=>{
        if(!err && fileDescriptor){
            const stringData=JSON.stringify(data);

            //truncate the file 
            fs.ftruncate(fileDescriptor,(err1)=>{
                if(!err1){
                    //Write to the file and close it
                    fs.writeFile(fileDescriptor,stringData,(err2)=>{
                        if(!err2){
                            //close the file
                            fs.close(fileDescriptor,(err3)=>{
                                if(!err3){
                                    callback(false);
                                }else{
                                    callback('Error closing file...');
                                }
                            });

                        }else{
                            callback('Error In Writing...');
                        }
                    });
                

                }else{
                    callback('Error truncating file..')
                }
            });

        }else{
            callback('Error Updating FIle');
        }

    });

};
 

lib.delete=(dir,file,callback)=>{
    fs.unlink(`${lib.basedir + dir}/${file}.json`,(err)=>{
        if(!err){
            callback(false);
        }else {
            callback('Error deleting file');
        }
    });
};

module.exports=lib;