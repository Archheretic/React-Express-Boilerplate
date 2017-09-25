// External dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

// Our files
const rootPath = require("../../projectRootPath");
const item = require("./routes/item");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// // This needs to me uncommented if you want to use  npm start hotload, BUT CORS might be security risk!
// app.use(function(req, res, next) {
//     // uncomment to allow cors, can be a security risk, but useful if you serve an API to a mobile application etc...
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token , Content-Type, Accept");
//     next();
// });
// // trust proxy must be enabled to run behind reverse proxy like Nginx
// app.enable("trust proxy");

// API routes (version api might be a bit overkill...)
app.use("/api/v1/items", item);

// Client entry point (React)
// define the folder that will be used for static assets
app.use(express.static(path.join(rootPath, "build")));
app.use(function(req, res, next) {
    res.sendFile(path.join(rootPath, "build/index.html"));
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "production";

app.listen(port);
console.log("NODE_ENV: " + env);
console.log("Server is running on port " + port);

module.exports = app;
