const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// mongoose.set('debug', true)
//model declaration




const categorySchema = new Schema(
    {

        // _id: String,

        categoryName: {
            type: String
        }
        

    },
    // { _id: false }

)

//model registration
const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;