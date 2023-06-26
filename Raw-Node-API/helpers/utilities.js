/*
 * Title: Utilities
 * Description: Important Utility function
 * Author: Hasib Abdullah Sarker
 * Date: 25/06/23
 */


//dependencies
const crypto =require('crypto'); 
const environments=require('./environment');


//module scaffolding
const utilities={};



//parse json string to object
utilities.parseJSON=(jsonString)=>{
    let output ={};

    try{
        output=JSON.parse(jsonString);
    }catch{
        output={};
    }
    return output;

};


//hash string
utilities.hash=(str)=>{
    if(typeof(str)=='string' && str.length>0){
        let hash=crypto
            .createHmac('sha256',environments.secretKey)
            .update(str)
            .digest('hex');
            return hash;   
    }else{
        return false;
    }
   
};


//Create random string
utilities.createRandomString = (strlength) => {
    let length = strlength;
    length = typeof(strlength) == 'number' && strlength >0?strlength : false;
    if(length){
        let possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let output = '';
        for(let i=1; i<=length; i++){
            const randomCharacter=possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );

            output+= randomCharacter;
        }
        return output;
    }else{
        return false;
    }
   
};



//export module
module.exports=utilities;

