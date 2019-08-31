const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/products-controller")


router.get("/", async (req, res, next) => {
  try {
    const result = await ProductsController.getProducts();
    res.json(result);
  } catch (ex) {
    res.status(404).send("eroor with get products")
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const result = await ProductsController.getProductsById(req.params.id);
    res.json(result);
  } catch (ex) {
    res.status(404).send("eroor with get products")
  }
})

router.get("/edit/:id", async (req, res, next) => {
  try {
    const result = await ProductsController.getProductToEdit(req.params.id);
    res.json(result);
  } catch (ex) {
    res.status(404).send("eroor with get product")
  }
})

router.post("/update", async (req, res, next) => {

  if(req.body.changeImage=="true"){
    try{
      let uploadedFile = req.files.file;
      let result= await ProductsController.updateProductWithPic(uploadedFile.name, req.body);
      uploadedFile.mv(`pics/${uploadedFile.name}`, err => {
        if (err) {
          res.json(err);
        } else {
          res.json( "successfuly saved");
        }
      });

    }catch(ex){
      res.json({ ex });
    }

  }else{
    try {
      let result= await ProductsController.updateProductWithoutPic(req.body);
      res.json(result);
    } catch (ex) {
      res.status(404).send(ex)
    }
    
    
  }


})
router.post("/add", async (req, res, next) => {

    try{
      let uploadedFile = req.files.file;
      let result= await ProductsController.addProduct(uploadedFile.name, req.body);
      uploadedFile.mv(`pics/${uploadedFile.name}`, err => {
        if (err) {
          res.json(err);
        } else {
          res.json( "successfuly saved");
        }
      });

    }catch(ex){
      res.json({ ex });
    }

  
})



module.exports = router;