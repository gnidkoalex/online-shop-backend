const express = require("express");
const router = express.Router();

const CartController = require("../controllers/cart-controller")


router.get("/:id", async (req, res, next) => {
    console.log("inside find by id ")
    console.log(req.params.id)
    try {
        const result = await CartController.getCartByid(req.params.id);
        res.json(result);
    } catch (ex) {
        res.status(404).send("eroor with get cart")
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

router.post("/addCartItem", async (req, res, next) => {
    if (req.body.cartId && req.body.amount && req.body.productId) {
        try {
            const result = await CartController.addCartItem(req.body.cartId, req.body.amount, req.body.productId);
            res.json(result);

        } catch (ex) {
            res.status(404).send("error with adding item to cart")
        }

    } else {
        res.send("params missing")
    }
})
// router.post("/addCartItem", async (req, res, next) => {
//     if (req.body.cartId && req.body.amount && req.body.productId) {
//         try {
//             const result = await CartController.addCartItem(req.body.cartId, req.body.amount, req.body.productId);
//             res.json(result);

//         } catch (ex) {
//             res.status(404).send("error with adding item to cart")
//         }

//     } else {
//         res.send("params missing")
//     }
// })

router.post("/deleteCartItem", async (req, res, next) => {
    if (req.body.cartId && req.body.productId) {
        try {
            const results = await CartController.delCartItem(req.body.cartId,req.body.productId);
            res.json(results);
        } catch (ex) {
            res.status(409).send(ex);
        }

    }

});





module.exports = router;