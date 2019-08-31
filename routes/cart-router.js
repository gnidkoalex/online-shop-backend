const express = require("express");
const router = express.Router();

const CartController = require("../controllers/cart-controller")


router.get("/:id", async (req, res, next) => {
    try {
        const result = await CartController.getCartItems(req.params.id);
    
        res.json(result);
    } catch (ex) {
        res.status(404).send("eroor with get cart items ")
    }
})


router.post("/create", async (req, res, next) => {
    if (req.body.customerId) {
        try {
            const result = await CartController.createCart(req.body.customerId);
            res.json(result);
        } catch (ex) {
            res.status(404).send("eroor with creating cart")
        }
    } else {
        res.send("params missing")
    }
})
router.post("/findCartByUser", async (req, res, next) => {
    if (req.body.customerId) {
        try {
            const result = await CartController.findCartByUser(req.body.customerId);
            res.json(result);
        } catch (ex) {
            res.status(404).send(ex)
        }
    } else {
        res.send("params missing")
    }
})

router.post("/addCartItem", async (req, res, next) => {
    if (req.body.data.currProduct.cartId && req.body.data.currProduct.amount && req.body.data.currProduct.productId) {
        try {
            const result = await CartController.addCartItem(req.body.data.currProduct.cartId, req.body.data.currProduct.amount, req.body.data.currProduct.productId);
            res.json(result);

        } catch (ex) {
            res.status(404).send("error with adding item to cart")
        }

    } else {
        res.send("params missing")
    }
})

router.post("/deleteCartItem", async (req, res, next) => {

    if (req.body.data.data.cartId && req.body.data.data.productId) {
        try {
            const results = await CartController.delCartItem(req.body.data.data.cartId,req.body.data.data.productId);
            res.json(results);
        } catch (ex) {
            res.status(409).send(ex);
        }

    }

});
router.post("/deleteAllCartItems", async (req, res, next) => {
    if (req.body.data.cartId) {
        try {
            const results = await CartController.delAllCartItems(req.body.data.cartId);
            res.json(results);
        } catch (ex) {
            res.status(409).send(ex);
        }

    }

});

router.post("/order", async (req, res, next) => {
    if (req.body) {
        try {
            const results = await CartController.order(req.body);
            res.json(results);
        } catch (ex) {
            res.status(409).send(ex);
        }

    }

});





module.exports = router;