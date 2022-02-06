const mongoose = require("mongoose");
userSchema = new mongoose.Schema({
    userid: Number,
    email: String,
    first_name: String,
    last_name: String,
    username: String,
    contact: String,
    password: String,
    role: String,
    isLoggedIn: Boolean
});
module.exports = mongoose.model("User", userSchema);