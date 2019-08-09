const cartModel = require("../models/cart-model");
const cartItemModel = require("../models/cartItem-model")
const productsModel = require("../models/products-model")


class CartController {

    static getCartByid(cartId) {
        return new Promise((resolve, reject) => {
            cartModel.findById(cartId, (err, results) => {
                if (err) reject("cart not exsist");
                resolve(results)
            })
        })
    }


    static createCart(customerId) {
        return new Promise((resolve, reject) => {
            let cart = new cartModel({ customerId });
            console.log(cart)
            cart.save((err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        })
    }
    static addCartItem(cartId, amount, itemId) {
        return new Promise((resolve, reject) => {
            productsModel.findById(itemId, (err, results) => {
                if (err) {
                    reject(err)
                } if (results) {
                    let totalPrice = results.price * amount
                    let cartItem = new cartItemModel({ cartId, itemId, amount, totalPrice })
                    cartItem.save((err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve("product added");
                        }
                    });
                } else {
                    reject("product not exsist")
                }
            })
        })
    }

    static delCartItem(cartId,productId){
        return new Promise((resolve,reject)=>{
            cartItemModel.deleteMany({cartId:cartId,itemId:productId},(err,result)=>{
                if (err) {
                    reject(err)
                } if(result.deletedCount==0){
                    reject("no such product in the cart")
                }else {
                    console.log(result)
                    resolve("product deleted");
                } 
        

            })


        })
    }


}
module.exports = CartController;

