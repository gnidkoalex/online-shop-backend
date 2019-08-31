const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {

        // _id: String,

        productName: {
            type: String
        },
        categoryId: [{
            type: String,
            ref: 'Category'
        }],
        price: {
            type: Number
        },
        image: {
            type: String
        }
    },
    // { _id: false }

)

//model registration
const productsModel = mongoose.model("products", productsSchema);

module.exports = productsModel;