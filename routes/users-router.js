const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users-controller")
const CartController= require("../controllers/cart-controller")


router.get("/", async (req, res, next) => {
    try {
        const result = await UsersController.getUsers();
        res.json(result);
    } catch (ex) {
        res.status(404).send("eroor with get users")
    }
})

router.post("/create", async (req, res, next) => {
    console.log(req.body.data.user)
    if (req.body.data.user.name && req.body.data.user.lastname && req.body.data.user.userId && req.body.data.user.city && req.body.data.user.adress && req.body.data.user.username && req.body.data.user.password) {
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

router.post("/login", async (req, res, next) => {
    if (req.body.data.user.userName && req.body.data.user.password) {
        try {
            const result = await UsersController.logIn(req.body.data.user.userName,req.body.data.user.password); 
            const userSession=await UsersController.generateSession(result._id)
            result.session=userSession
            console.log(result)
            console.log("asdf")
            res.json(result); 
        } catch (ex) {
            res.status(404).send("user name or password doesnot match")
        }
    }else{
        res.send("params missing")
    }
})
router.post("/verify", async (req, res, next) => {
 
    if (req.body.data.session) {
        
        try {
            const result = await UsersController.verify(req.body.data.session);
            res.json(result); 
        } catch (ex) {
            res.status(404).send("session doesnt exist")
        }
    }else{
        res.send("session doesnt exist")
    }
})
router.post("/logout", async (req, res, next) => {
 console.log("inside log out ")
    if (req.body.data.session) {
        
        try {
            const result = await UsersController.logout(req.body.data.session);
            res.json(result); 
        } catch (ex) {
            res.status(404).send("erorr with logingout")
        }
    }else{
        res.send("erorr with logingout")
    }
})






module.exports = router;