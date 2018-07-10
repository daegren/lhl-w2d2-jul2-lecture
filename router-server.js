"use strict";

let http = require("http");

// define app constants
const PORT = 9000;

// define the functions to handle different requests
let getHomePage = function(req, res) {
  res.end("This is a GET request to /");
};

let getUsersPage = function(req, res) {
  res.end("This is a GET request to /users");
};

// define routes handlers
const handlers = {
  "GET /": getHomePage,
  "GET /users": getUsersPage
};

// create a server with a responder function
let server = http.createServer(function respondToRequests(req, res) {
  // respond to all requests in this function
  // use the handlers object to determine with function to call
  const route = `${req.method} ${req.url}`;
  // if the route has a handler, then call it
  if (route in handlers) {
    handlers[route](req, res);
  } else {
    // otherwise, give a generic not found response
    res.statusCode = 404;
    res.end("Route Not Found");
  }
});

// start the server
server.listen(PORT, function onServerStart() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
