const { Router } = require("express");
const router = Router();
const UserMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    const UserExist = await User.findOne({
        username: username,
        password: password
    });
    if (!(UserExist)) {
        await User.create({
            username: username,
            password: password
        })
        res.json({
            message: 'User created successfully'
        })
    }
    else {
        res.json({
            message: 'User alredy exist'
        })
    }
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

router.post('/courses/:courseId', UserMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    //User.updateOne() method in Mongoose is asynchronous. Therefore, you need to await the update operation to ensure that it completes before sending the response using res.json().
    await User.updateOne(
        {
            username: username,
        },
        {
            "$push": {
                purchased_course: courseId,
            },
        }
    );
    res.json({
        message: "Purchase complete!",
    })
});

router.get('/purchasedCourses', UserMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = await User.findOne({
            username: req.headers.username,
        })
        console.log(user.purchased_course)
        const courses = await Course.find({
            _id: {
                "$in": user.purchased_course,  //$in =>  find the courses whose _id is present in user.purchasedCourses => that sepcific user ke andar jo _id hai wo course _id se courses present in Course table.
            },
        });
        res.json({
            courses: courses,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Error fetching purchased courses",
            error: error.message,
        });
    }
});
module.exports = router