/*
 * Title: sample Handler
 * Description:sample Handler
 * Author: Hasib Abdullah Sarker
 * Date:24/06/2023
 */

const handler = {};

handler.sampleHandler = (requestProperties,callback)=>{
    
    callback(200,{
        message: 'This is Sample URL..',

    });
    
}; 

module.exports =handler;