const mongoose = require("mongoose");

const Schema = mongoose.Schema;





const cartSchema = new Schema(
    {

        // _id: String,

        customerId: {
            type: String
        },
        createdDate: {
            type: Date,
            default: Date.now()
        }
        

    },
    // { _id: false }

)

//model registration
const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;