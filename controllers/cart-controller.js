const cartModel = require("../models/cart-model");


class CartController{

    static getCartByid(cartId){
        return new Promise((resolve,reject)=>{
            cartModel.findById(cartId,(err,results)=>{
                if(err) reject("cart not exsist");
                resolve(results)
            })
        })
    }
    

    static createCart (customerId){
        return new Promise((resolve,reject)=>{
            let cart = new cartModel({customerId});
            console.log(cart)
            cart.save((err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    resolve("cart added");
                }
            });
        })


    }
}
module.exports=CartController;

