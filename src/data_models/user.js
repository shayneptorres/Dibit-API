import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

let Schema = mongoose.Schema;

let User = new Schema({
    name:{
        type: String,
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",User);