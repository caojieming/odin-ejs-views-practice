// standard express import
const express = require("express");
const app = express();

// import the Path CommonJS module from Node
const path = require("node:path");

// let code know we're using ejs as template engine as well as location of views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



// the first argument of res.render is “a template called index in the specified folder above”, the second argument is an object of variables that are to be made available to that specific template
app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});



// open web server
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}`);
});
