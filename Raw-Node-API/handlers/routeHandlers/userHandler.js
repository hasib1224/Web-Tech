/*
 * Title:User handler
 * Description: handler to handle user related routes
 * Author: Hasib Abdullah Sarker
 * Date: 25/06/2023
 */
//dependencies
const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const { parseJSON } = require("../../helpers/utilities");
const tokenHandler = require("./tokenHandler");

//module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
  const acceptedMethods = ["get", "post", "delete", "put"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._users[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
  const firstName =
    typeof requestProperties.body.firstName == "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : false;

  const lastName =
    typeof requestProperties.body.lastName == "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : false;

  const phone =
    typeof requestProperties.body.phone == "string" &&
    requestProperties.body.phone.trim().length == 11
      ? requestProperties.body.phone
      : false;

  const password =
    typeof requestProperties.body.password == "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;

  const tosAgreement =
    typeof requestProperties.body.tosAgreement == "boolean" &&
    requestProperties.body.tosAgreement
      ? requestProperties.body.tosAgreement
      : false;

  if (firstName && lastName && password && tosAgreement) {
    //make sure that the user doesn't already exists
    data.read("users", phone, (err1) => {
      if (err1) {
        const userObject = {
          firstName,
          lastName,
          phone,
          password: hash(password),
          tosAgreement,
        };

        //store data
        data.create("users", phone, userObject, (err2) => {
          if (!err2) {
            callback(200, {
              message: "User was created successfully",
            });
          } else {
            callback(500, {
              error: `couldn't create users`,
            });
          }
        });
      } else {
        callback(500, {
          error: "There is a problem in server side",
        });
      }
    });
  } else {
    callback(400, {
      error: "you have a problem in your request",
    });
  }
};

handler._users.get = (requestProperties, callback) => {
  //check the phone number is valid
  const phone =
    typeof requestProperties.queryStringObject.phone == "string" &&
    requestProperties.queryStringObject.phone.trim().length == 11
      ? requestProperties.queryStringObject.phone
      : false;

  if (phone) {
    //verify the user
    let token =
      typeof requestProperties.headerObject.token == "string"
        ? requestProperties.headerObject.token
        : false;
    tokenHandler._token.verify(token, phone, (tokenId) => {
      if (tokenId) {
        //lookup user
        data.read("users", phone, (err, u) => {
          //...means spreding the u object after parsing
          //single level object hole evabe copy kora jay object
          const user = { ...parseJSON(u) };
          if (!err && user) {
            delete user.password;
            callback(200, user);
          } else {
            callback(404, {
              error: "Requested USer was not found",
            });
          }
        });
      } else {
        callback(403, {
          error: "Authentication failed!!",
        });
      }
    });
  } else {
    callback(404, {
      error: `requested user wasn't found`,
    });
  }
};

handler._users.delete = (requestProperties, callback) => {
  const phone =
    typeof requestProperties.queryStringObject.phone == "string" &&
    requestProperties.queryStringObject.phone.trim().length == 11
      ? requestProperties.queryStringObject.phone
      : false;

  if (phone) {
    let token =
      typeof requestProperties.headerObject.token == "string"
        ? requestProperties.headerObject.token
        : false;
    tokenHandler._token.verify(token, phone, (tokenId) => {
      if (tokenId) {
        //Delete the user
        data.read("users", phone, (err1, userData) => {
          if (!err1 && userData) {
            data.delete("users", phone, (err2) => {
              if (!err2) {
                callback(200, {
                  message: "User was successfully deleted ",
                });
              } else {
                callback(500, {
                  message: "there is a server side error",
                });
              }
            });
          } else {
            callback(500, {
              message: "there is a server side error",
            });
          }
        });
      } else {
        callback(403, {
          error: "Authentication failed!!",
        });
      }
    });
  } else {
    callback(400, {
      error: "There was a probloem in your request",
    });
  }
};

handler._users.put = (requestProperties, callback) => {
  //check the phone number is valid or not
  const phone =
    typeof requestProperties.body.phone == "string" &&
    requestProperties.body.phone.trim().length == 11
      ? requestProperties.body.phone
      : false;

  const firstName =
    typeof requestProperties.body.firstName == "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : false;

  const lastName =
    typeof requestProperties.body.lastName == "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : false;

  const password =
    typeof requestProperties.body.password == "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;

  if (phone) {
    if (firstName || lastName || password) {
      let token =
        typeof requestProperties.headerObject.token == "string"
          ? requestProperties.headerObject.token
          : false;
      tokenHandler._token.verify(token, phone, (tokenId) => {
        if (tokenId) {
          //look up user
          data.read("users", phone, (err1, uData) => {
            const userData = { ...parseJSON(uData) };
            if (!err1 && userData) {
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.password = hash(password);
              }
              //store to database
              data.update("users", phone, userData, (err2) => {
                if (!err2) {
                  callback(200, {
                    message: "User was updated successfully",
                  });
                } else {
                  callback(500, {
                    error: "There was a problem in server side",
                  });
                }
              });
            } else {
              callback(400, {
                error: "you have a problem in your request",
              });
            }
          });
        } else {
          callback(403, {
            error: "Authentication failed!!",
          });
        }
      });
    } else {
      callback(400, {
        error: "you have a problem in your request",
      });
    }
  } else {
    callback(400, {
      error: "Invalid phone number. please chup try again",
    });
  }
};

module.exports = handler;
