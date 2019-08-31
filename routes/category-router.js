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
    try {
        const result = await CategoryController.getCategoryByName(req.params.name);
        res.json(result);
    } catch (ex) {
        res.status(404).send(ex)
    }
})





module.exports = router;