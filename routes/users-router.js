const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users-controller")


router.get("/", async (req, res, next) => {
    try {
        const result = await UsersController.getUsers();
        res.json(result);
    } catch (ex) {
        res.status(404).send("eroor with get users")
    }
})

router.post("/create", async (req, res, next) => {
    if (req.body.name && req.body.lastname && req.body.userId && req.body.city && req.body.adress && req.body.username && req.body.password) {
        try {
            const result = await UsersController.createUser(req.body);
            res.json(result);
        } catch (ex) {
            res.status(404).send("eroor with creating user")
        }
    }else{
        res.send("params missing")
    }
})





module.exports = router;