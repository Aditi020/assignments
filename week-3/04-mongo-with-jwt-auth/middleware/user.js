const jwt = require('jasonwebtoken');
const { JWT_SECRET } = require("../config");


// Middleware for handling auth
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            next();
        }
        else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }
    catch (e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = userMiddleware;

// async function userExists(username, password) {
//     const { Admin } = require("../db");
//     // should check in the database
//     const username = req.headers.username;
//     const password = req.headers.password;

//     const AdminExist = await Admin.findOne({
//         username: username,
//         password: password,
//     });
//     if (AdminExist) {
//         next();
//     } else {
//         res.status(403).send({
//             msg: "User Not Exist",
//         });
//     }
// }