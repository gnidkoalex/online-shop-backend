const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// mongoose.set('debug', true)
//model declaration




const orderSchema = new Schema(
    {

        // _id: String,

        userId: {
            type: String
        },
        cartId: {
            type: String
        },
        price: {
            type: Number
        },
        cartItems: {
            type: Array
        },
        city: {
            type: String
        },
        adress: {
            type: String
        },
        date: {
            type: String
        },
        creditCard:{
            type: Number
        },

        createdDate: {
            type: Date,
            default: Date.now()
        }
        

    },
    // { _id: false }

)

//model registration
const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;