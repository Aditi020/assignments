const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // checks if a user alredy exists in the DB
    let existingUser = await User.findOne({ username });

    if (existingUser) {
        res.json({
            message: "User already signed up",
        });
    }
    else {
        await User.create({
            username: username,
            password: password,
        });

        res.json({
            message: "User created successfully",
        });
    }
});


router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.send({
        course: response
    });
});


router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
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
    const user = await User.findOne({
        username: req.headers.username,
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses,
        },
    });

    res.json({
        courses: courses,
    });
});

module.exports = router