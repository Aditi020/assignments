const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
const { User } = require("../db")
// Middleware for handling auth
async function UserMiddleware(req, res, next) {
    // Implement User auth logic
    // You need to check the headers and validate the User from the User DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        const isUser = await User.findOne({ username: decodedValue});
        console.log(decodedValue);
        if (isUser) {
            req.username = decodedValue;
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated",
            });
        }
    } catch (e) {
        res.json({
            msg: "Incorrect inputs",
        });
    }
}

module.exports = UserMiddleware;