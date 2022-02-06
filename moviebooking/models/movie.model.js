const mongoose = require("mongoose");
movieSchema = new mongoose.Schema({
    movieid: Number,
    title: String,
    published: Boolean,
    released: Boolean,
    profile_url: String,
    release_date: Date,
    publish_date: Date,
    trailer_url: String,
    wiki_url: String
});
module.exports = mongoose.model("Movies", movieSchema);