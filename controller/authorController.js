const {Author, Book} = require("../model/model");


const authorController = {
    //Thêm sản phẩm
    addAuthor : async(req,res)=>{
        try {
            const newAuthor  = new Author(req.body)
            const saveAuthor = await newAuthor.save()
            res.status(200).json(saveAuthor)
        } catch (err) {
            res.status(500).json(err)
        }

    },
    // Lấy hết sản phẩm 
    getAllAuthor : async(req, res)=>{
        try {
            const authors = await Author.find();
            res.status(200).json(authors)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Lấy 1 sản phẩm
    getAnAuthor : async(req,res) =>{
        try {
            const author = await Author.findById(req.params.id).populate("books")
            res.status(200).json(author)
        } catch (err) {
            res.status(500).json(err)
            
        }
    },
    // Sửa sản phẩm
    updateAuthor : async(req,res)=>{
        try {
            const author = await Author.findById(req.params.id)
            await author.updateOne({$set : req.body})
            res.status(200).json("update sucessfuly!!!")
        } catch (err) {
            res.status(500).json(err)
        }
    }
};
module.exports = authorController;