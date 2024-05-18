const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    // async function userExists(username, password) {
        // should check in the database

        const username = req.headers.username;
        const password = req.headers.password;

        const UserExist = User.findOne({
            username: username,
            password: password,
        }).then(function (value) {
        if (value) {
            next();
        } else {
            res.status(403).send({
                msg: "User Not Exist",
            });
        }
        })}

module.exports = userMiddleware;