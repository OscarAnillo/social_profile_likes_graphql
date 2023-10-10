const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to DB.")
})


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picturePath: {
        type: String,
        default: ""
    },
    location: String,
    occupation: String
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema);