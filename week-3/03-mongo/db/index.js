const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://aditikumar2224:AK0MongoDB@cluster0.zie5hxe.mongodb.net/New_user_app",
).then(() => {
    console.log("Connected to MongoDB");
})
    .catch((e) => {
        console.log(e);
    });

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
