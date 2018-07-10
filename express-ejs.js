"use strict";

let express = require("express");

// define app constants
const PORT = 9000;

let server = express();

// Setting up the server to use the ejs view engine.
// N.B. this requires us to run `npm install --save ejs` in our project
server.set("view engine", "ejs");

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
  // Rendering out our index.ejs template
  res.render("index");
});

server.get("/users", function(req, res) {
  // Rendering out our users.ejs Template
  const users = [{ id: 1, name: "Dave" }, { id: 2, name: "Juan" }];

  // Using template varaibles to pass data to our template.
  res.render("users", { users: users });
});

// start the server
server.listen(PORT, function onServerStart() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
