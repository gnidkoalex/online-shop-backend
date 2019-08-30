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
  console.log("ASD")
  console.log(req.params.id)
  try {
    const result = await ProductsController.getProductToEdit(req.params.id);
    res.json(result);
  } catch (ex) {
    res.status(404).send("eroor with get product")
  }
})

router.post("/update", async (req, res, next) => {
  console.log("indide update")
  console.log(req.body)
  if(req.body.changeImage=="true"){
    console.log("change image = true")
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
    console.log("change image = false")
    try {
      let result= await ProductsController.updateProductWithoutPic(req.body);
      res.json(result);
    } catch (ex) {
      res.status(404).send(ex)
    }
    
    
  }

  // let uploadedFile = req.files.file;
  // const results = await ProductsController.updateProduct(uploadedFile.name, req.body);
  // uploadedFile.mv(`pics/${uploadedFile.name}`, err => {
  //   if (err) {
  //     res.json({
  //       message: `${req.files.file.name} was not saved`,
  //       err: JSON.stringify(err)
  //     });
  //   } else {
  //     res.json({ message: `${req.files.file.name} saved` });
  //   }
  // });



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
router.post("/add", async (req, res, next) => {
  console.log("indide add")
  console.log(req.body)
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