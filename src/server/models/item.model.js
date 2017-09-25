const db = require("../dbconnection");
const mysql = require("mysql");

const item = {
    /**
     * Returns the item that belongs to the id.
     */
    getItem : function(id, callback) {
        const query =
            "SELECT * FROM item " +
            "WHERE id = ?";
        const input = [id];
        const prepStatement = mysql.format(query, input);
        db.query(prepStatement, callback);
    },

    /**
     * Returns all items
     */
    getAllItems : function(callback) {
        const query =
            "SELECT * FROM item";
        const prepStatement = mysql.format(query);
        db.query(prepStatement, callback);
    },

    /**
     * add an item
     */
    addItem : function(name, callback) {
        const query = "INSERT INTO item(name) VALUES(?)";
        const values = [name];
        const prepStatement = mysql.format(query, values);
        db.query(prepStatement, callback);
    },
};
module.exports = item;