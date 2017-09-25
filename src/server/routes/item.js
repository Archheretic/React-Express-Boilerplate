const express = require("express");
const router = express.Router();
const Item = require("../models/item.model");

/**
 * Route to get all items
 */
router.get("/", function(req, res) {
    Item.getAllItems(function(err, rows) {
        if (err) {
            const env = process.env.NODE_ENV;
            let message = "Internal Server Error";
            if (env === "dev" || env === "test") {
                message = err;
            }
            res.status(500).send({
                success: false,
                message: message
            });
        }
        else {
            res.json({"items" : rows});
        }
    });
});

/**
 * Route to get a specific item
 */
router.get("/:id", function(req, res) {
    Item.getItem(req.params.id, function(err, rows) {
        if (err) {
            const env = process.env.NODE_ENV;
            let message = "Internal Server Error";
            if (env === "dev" || env === "test") {
                message = err;
            }
            res.status(500).send({
                success: false,
                message: message
            });
        }
        else {
            res.json({"items" : rows});
        }
    });
});

/**
 * Route for creating new items.
 */
router.post("/", function(req, res) {
    if (!req.body.name) {
        res.status(400).send({
            success: false,
            message: "request body is missing attribute: name"
        });
        return;
    }

    Item.addItem(req.body.name, function(err, result) {
        if (err) {
            const env = process.env.NODE_ENV;
            // console.log(err);
            let message = "Internal Server Error";
            if (env === "dev" || env === "test") {
                message = err;
            }
            res.status(500).send({
                success: false,
                message: message
            });
        }
        else {
            res.status(201).send({
                success: true,
                message: "Item Added"
            });
        }
    });
});
module.exports = router;