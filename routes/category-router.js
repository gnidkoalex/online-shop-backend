const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category-controller")

router.get("/", async (req, res, next) => {
    try {
        const result = await CategoryController.getCategoreis();
        res.json(result);
    } catch (ex) {
        res.status(404).send(ex)
    }
})


router.get("/:name", async (req, res, next) => {
    console.log("inside category by name ")
    try {
        const result = await CategoryController.getCategoryByName(req.params.name);
        res.json(result);
    } catch (ex) {
        res.status(404).send(ex)
    }
})


// router.post("/create", async (req, res, next) => {
//     if (req.body.customerId) {
//         try {
//             const result = await CartController.createCart(req.body.customerId);
//             res.json(result);
//         } catch (ex) {
//             res.status(404).send("eroor with creating cart")
//         }
//     }else{
//         res.send("params missing")
//     }
// })





module.exports = router;