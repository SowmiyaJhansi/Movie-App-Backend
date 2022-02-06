const mongoose = require("mongoose");
artistSchema = new mongoose.Schema({
    artistid: Number,
    first_name: String,
    last_name: String,
    wiki_url: String,
    profile_url: String  
});
module.exports = mongoose.model("Artist", artistSchema);