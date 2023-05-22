const {Author, Book} = require("../model/model");

const bookController = {
    //add book
     addBook : async(req,res)=>{
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books: saveBook.id}})
            }
            res.status(200).json(saveBook);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Lấy toàn bộ sản phẩm
    getAllBook : async(req,res)=>{
        try {
            const Books = await Book.find()
            res.status(200).json(Books)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Lấy 1 sản phầm
    getAnBook : async(req,res)=>{
        try{
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    updateBook : async(req,res)=>{
        try{
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set : req.body})
            res.status(200).json("update sucessfuly!!!")
        } 
        catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = bookController;