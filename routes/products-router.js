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

router.post("/update", async (req, res, next) => {
    console.log("inside update ")
    console.log(req.body)
    // console.log(req.files.file)

    
//   let tags = req.body.tag.split("#")
//   tags.splice(0,1)

  let uploadedFile = req.files.file;



  const results = await ProductsController.updateProduct(uploadedFile.name,req.body);
  


  uploadedFile.mv(`pics/${uploadedFile.name}`,err => {
    if (err) {
      res.json({
        message: `${req.files.file.name} was not saved`,
        err: JSON.stringify(err)
      });
    } else {
      res.json({ message: `${req.files.file.name} saved` });
    }
  });
    //    if (req.body.data.session) {
           
    //        try {
    //            const result = await UsersController.logout(req.body.data.session);
    //            res.json(result); 
    //        } catch (ex) {
    //            res.status(404).send("erorr with logingout")
    //        }
    //    }else{
    //        res.send("erorr with logingout")
    //    }
   })



module.exports= router;