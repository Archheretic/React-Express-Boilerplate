const mysql = require("mysql");
const config = require("config");

const env = config.util.getEnv("NODE_ENV");
console.log("Server is run in " + env + " mode");
const connection = mysql.createPool({
    connectionLimit : 10,
    host     : config.DBHost,
    user     : config.DBUser,
    password : config.DBPassword,
    database : config.Database,
    multipleStatements: env === "test",
});

module.exports = connection;