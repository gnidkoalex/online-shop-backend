const express = require("express");
require("dotenv").config();
const app = express();
const cors= require("cors");
const bodyParser= require("body-parser");
const upload = require("express-fileupload");


const productsRouter= require("./routes/products-router")
const UsersRouter= require("./routes/users-router")
const CartRouter= require("./routes/cart-router")
const CategoryRouter= require("./routes/category-router")


const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/onlineShop",{useNewUrlParser:true});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/pics",express.static(__dirname + "/pics"));
app.use(upload());


app.use("/products",productsRouter);
app.use("/users",UsersRouter);
app.use("/cart",CartRouter);
app.use("/category",CategoryRouter);

app.use((error,req,res,next)=>{
    res.status(500).send(error);
});

const port=process.env.PORT || 3200;
console.log("server is runing on port ",port);
app.listen(port);