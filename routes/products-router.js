const express =require("express");
const router= express.Router();

const ProductsController= require("../controllers/products-controller")


router.get("/",async(req,res,next)=>{
    try{
        const result = await ProductsController.getProducts();
        res.json(result);
    }catch (ex){
        res.status(404).send("eroor with get products")
    }
})

router.get("/:id",async(req,res,next)=>{
    try{
        const result = await ProductsController.getProductsById(req.params.id);
        res.json(result);
    }catch (ex){
        res.status(404).send("eroor with get products")
    }
})

router.get("/edit/:id",async(req,res,next)=>{
    console.log("ASD")
    console.log(req.params.id)
    try{
        const result = await ProductsController.getProductToEdit(req.params.id);
        res.json(result);
    }catch (ex){
        res.status(404).send("eroor with get product")
    }
})

module.exports= router;