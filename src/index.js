const express = require("express");
const app = express();
const routes = require("./routes/");
// settings
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", __dirname+"/views/");

// middlewares

// routes
app.use(routes);
app.use(express.static(__dirname+"/public/"))

// static files

// listening on the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});