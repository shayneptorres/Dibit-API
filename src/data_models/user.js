import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

let Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String, 
        required: false
    },
    email: String,
    password: String,
    dibs: [{type: Schema.Types.ObjectId, ref: "Dib"}],
    groups: [{type: Schema.Types.ObjectId, ref: "Group"}],
    groupRequests: [{type: Schema.Types.ObjectId, ref: "GroupRequest"}]
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",User);
