/*
 * Title: Uptime Monitoring Application
 * Description: A restful API to monitor up or down time of user define links
 * Author: Hasib Abdullah Sarker
 * Date:24/06/2023
 */

//dependencies
const http=require('http');
const {handleReqRes} =require ('./helpers/handleReqRes');
const environment =require('./helpers/environment');
const data=require('./lib/data');

//App object-module scaffolding
const app ={}

//Testsing the file system
//pore muche dibo TODO
// data.delete('test' , 'newFile',(err)=>{
//     console.log(`error was`,err);
// });


//create server
app.createServer = ()=>{
    const server= http.createServer(app.handleReqRes);
    
    server.listen(environment.port, ()=>{
        console.log(`Listening to port ${environment.port}`);
    });
};

//handle request response
app.handleReqRes = handleReqRes;

app.createServer();