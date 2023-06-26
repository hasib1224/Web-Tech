/*
 * Title: Handle Request response
 * Description:
 * Author: Hasib Abdullah Sarker
 * Date: 24/06/2023
 */

//dependencies
const url = require('url');
const {StringDecoder}=require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} =require ('../handlers/routeHandlers/notFoundHandler');
const {parseJSON}=require('../helpers/utilities');

// module scaffolding
const handler={};

handler.handleReqRes = (req,res)=>{
    //req handling
    //get the url and parse it
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimedPath =path.replace(/^\/+|\/+$/g,'');
    const method =req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;


    const requestProperties ={
        parsedUrl,
        path,
        trimedPath,
        method,
        queryStringObject,
        headerObject,
    };

    const decoder =new StringDecoder('utf-8');
    let realData='';

    const chosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler;

    

    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer);
    });

    req.on('end',()=>{
        realData+=decoder.end();

        requestProperties.body=parseJSON(realData);
        
        chosenHandler(requestProperties,(statusCode,payload)=>{
            statusCode = typeof(statusCode)==='number'?statusCode:500;
            payload = typeof(payload)=== 'object' ? payload:{};
    
            const payloadString = JSON.stringify(payload);
            

            //return the final response
            res.setHeader('content-Type','application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
        // res.end(jnjsbd);

    });


};

module.exports=handler;



