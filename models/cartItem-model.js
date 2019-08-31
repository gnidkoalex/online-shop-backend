const mongoose = require("mongoose");

const Schema = mongoose.Schema;




const cartItemSchema = new Schema(
    {

        // _id: String,

        cartId: {
            type: String,
        },
        itemId:{
            type:String,
            ref:'products'
        },
        amount:{
            type:Number
        },
        totalPrice:{
            type:Number
        },
       
        

    },
    // { _id: false }

)

//model registration
const cartItemModel = mongoose.model("cart_items", cartItemSchema);

module.exports = cartItemModel;