const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require ("dotenv");
const authorRouter = require("./router/authorRouter");
const bookRouter = require("./router/bookRouter")


app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


// app.get("/api",(req,res)=>{
//     res.status(200).json("Hello");
// })
//Liên kết MongooDB
dotenv.config();
mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log("conect to database")
})
app.use("/v1/author", authorRouter);
app.use("/v1/book", bookRouter);

//Tạo port server
app.listen(8000, ()=>{
    console.log ("Server is running!!!");
});