const mongoose = require("mongoose");
//Schema Author
const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,

    },
    year:{
        type: Number,
        required : true,
    },
    books:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        }
    ],
        
});
//Schema book
const bookSchema = new mongoose.Schema({
    name: { 
        type : String,
        required : true,
    },
    pulishedDate: {
        type : String,
    },
    genres: {
        type: [String],
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Author",
    },

});
let Book = mongoose.model("Book",bookSchema);
let Author = mongoose.model("Author",authorSchema);
module.exports = {Book, Author};