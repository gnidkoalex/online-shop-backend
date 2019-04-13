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

module.exports= router;