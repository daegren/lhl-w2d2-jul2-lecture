"use strict";

let express = require("express");

// define app constants
const PORT = 9000;

let server = express();

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

// let server2 = express();
//
// server2.get("/", (req, res) => {
//   res.send("Second server got a diffrent response.");
// });
//
// server2.listen(PORT + 1, () => {
//   console.log("Server2 listening on: http://localhost:%s", PORT + 1);
// });
