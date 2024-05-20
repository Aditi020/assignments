const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password
    })
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement User signup logic
    const { User } = require("../db");
    // should check in the database
    const username = req.headers.username;
    const password = req.headers.password;

    const UserExist = await User.findOne({
        username: username,
        password: password
    });
    if (UserExist) {
        const token = jwt.sign(username, JWT_SECRET)
        res.json({
            token
        })
    }
    else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    User.updateOne(
        {
            username: username,
        },
        {
            "$push": {
                purchasedCourses: courseId,
            },
        }
    );
    res.json({
        message: "Purchase complete!",
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = User.findOne({
        username: req.headers.username,
    })
    console.log; (user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses,  //$in =>  find the courses whose _id is present in user.purchasedCourses => that sepcific user ke andar jo _id hai wo course _id se courses present in Course table.
        },
    });
    res.json({
        courses: courses,
    })
});
module.exports = router