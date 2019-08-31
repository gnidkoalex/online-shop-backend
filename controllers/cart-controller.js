const cartModel = require("../models/cart-model");
const cartItemModel = require("../models/cartItem-model")
const productsModel = require("../models/products-model")
const orderModel= require("../models/order-model")


class CartController {

    static getCartByid(cartId) {
        return new Promise((resolve, reject) => {
            cartModel.findById(cartId, (err, results) => {
                if (err) reject("cart not exsist");
                resolve(results)
            })
        })
    }

    static findCartByUser(userId) {

        return new Promise((resolve, reject) => {
            cartModel.find({ customerId: userId }, (err, results) => {
                if (err) { reject("cart not exsist") }
                else if (results.length == 0) {
                    resolve(results)
                };

                resolve(results)
            })
        })

    }

    static getCartItems(cartId) {
        return new Promise((resolve, reject) => {
            cartItemModel.find({ cartId: cartId }, (err, results) => {
                if (err) { reject("cart not exsist") }
                resolve(results)
            }).populate("itemId")
        })
    }


    static createCart(customerId) {
        return new Promise((resolve, reject) => {
            let cart = new cartModel({ customerId });
            // console.log(cart)
            cart.save((err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    resolve(result._id);
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

    static delCartItem(cartId, productId) {
        console.log(productId)
        return new Promise((resolve, reject) => {
            cartItemModel.deleteOne({ cartId: cartId, itemId: productId }, (err, result) => {
                if (err) {
                    reject(err)
                } if (result.deletedCount == 0) {
                    console.log("delcount 0")
                    resolve("no such product in the cart")
                } else {
                    resolve("product deleted");
                }


            })


        })
    }
    static delAllCartItems(cartId) {
        console.log("yap")
        console.log(cartId)
        return new Promise((resolve, reject) => {
            cartItemModel.deleteMany({ cartId: cartId}, (err,result) => {
                if (err) {
                    reject(err)
                
                } else {
                    resolve("all products been deleted");
                }


            })


        })
    }
    static order(data) {
        return new Promise((resolve, reject) => {
            console.log("inside order")
            let userId=data.userId
            let cartId=data.cartId
            let price=data.price
            let cartItems=data.cartItems
            let city=data.city
            let adress=data.adress
            let date=data.date
            let creditCard =data.creditCard
            
            
            
            // console.log(data.userId)
            // console.log(data.cartId)
            // console.log(data.price)
            // console.log(data.cartItems)
            // console.log(data.city)
            // console.log(data.date)
            // console.log(data.creditCard)
            // console.log(data.userId)
            // console.log(data.userId)
            // console.log(data.userId)
            let order = new orderModel({ userId,cartId,price,cartItems,city,adress,date,creditCard});
            // console.log(order)
            // console.log(cart)
            order.save((err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    resolve(result._id);
                }
            });
        })
    }
   


}
module.exports = CartController;

