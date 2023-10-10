const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true 
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String, 
    },
    location: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    picturePath: {
        type: String
    },
    userPicturePath: {
        type: String
    },
})

module.exports = mongoose.model("Post", postSchema);