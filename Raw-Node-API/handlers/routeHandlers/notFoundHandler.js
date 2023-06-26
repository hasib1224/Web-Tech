/*
 * Title: not found Handler
 * Description:404 not found Handler
 * Author: Hasib Abdullah Sarker
 * Date:24/06/2023
 */

const handler={};
handler.notFoundHandler = (requestProperties,callback)=>{
    callback(404,{
        message: `Your requested URL isn't found..`,
    });

}; 

module.exports =handler;