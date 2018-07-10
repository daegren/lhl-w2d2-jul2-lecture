"use strict";

let express = require("express");

// define app constants
const PORT = 9000;

let server = express();

// ex_01 ==> define a simple middleware function that logs all requests
server.use(function(req, res, next) {
  console.log(`New Request: ${req.method} ${req.url}`);
  // go to next step in middleware chain
  next();
});

// ex_02 ==> allow the loading of static files from server
//                   only for the `public` folder
server.use("/public", express.static("public"));

// define the routes that you'd like the server to respond to
server.get("/", function(req, res) {
  res.send("Just got a GET request to '/'");
});

server.get("/users", function(req, res) {
  res.send("Just got a GET request to '/users'");
});

// start the server
server.listen(PORT, function onServerStart() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
