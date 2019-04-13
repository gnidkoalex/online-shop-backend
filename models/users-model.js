const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// mongoose.set('debug', true)
//model declaration




const usersSchema = new Schema(
    {

        // _id: String,

        role: {
            type: String
        },
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        userId: {
            type: Number
        },
        city: {
            type: String
        },
        adress: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        }
        

    },
    // { _id: false }

)

//model registration
const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;