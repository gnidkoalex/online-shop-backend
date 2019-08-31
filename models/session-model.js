const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionSchema = new Schema(
    {

        _id: String,
        userId:{
            type:String,
            ref:'users'
        }
       
    },
    { _id: false }

)

//model registration
const sessionModel = mongoose.model("sessions", sessionSchema);

module.exports = sessionModel;