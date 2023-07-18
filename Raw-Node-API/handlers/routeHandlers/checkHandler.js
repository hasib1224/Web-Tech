/*
 * Title:check handler
 * Description: handler to handle user check related routes
 * Author: Hasib Abdullah Sarker
 * Date: 26/06/2023
 */

//dependencies
const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const { parseJSON } = require("../../helpers/utilities");
const tokenHandler = require("./tokenHandler");

//module scaffolding
const handler = {};

handler.checkHandler = (requestProperties, callback) => {
  const acceptedMethods = ["get", "post", "delete", "put"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._check[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._check = {};



handler._check.post = (requestProperties, callback) => {
  
};



handler._check.get = (requestProperties, callback) => {
  
};



handler._check.delete = (requestProperties, callback) => {
  
};



handler._check.put = (requestProperties, callback) => {
  
};


module.exports = handler;
