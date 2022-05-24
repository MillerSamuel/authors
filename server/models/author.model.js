const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Content is required"],
        minlength:[2,"Content must be atleast 2 characters"]
    }

},{timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
