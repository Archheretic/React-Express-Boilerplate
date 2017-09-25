import baseConsumer from "./baseConsumer";

const Item = {

    getAllItems: function (callback) {
        baseConsumer.getJSON("items/", "", (err, result) => {
            if (!err) {
                callback(null, result);
            }
            else {
                callback(err);
            }
        });
    },

    getItem: function (id, callback) {
        baseConsumer.getJSON("items/", id, (err, result) => {
            if (!err) {
                callback(null, result);
            }
            else {
                callback(err);
            }
        });
    },

    postItem: function(name, callback) {
        const route = "items/";
        const data = {
            name: name
        };
        baseConsumer.postJSON(route, data, (err, data) => {
            if (!err) {
                callback(null, data);
            }
            else {
                callback(err);
            }
        });
    },
};

export default Item;