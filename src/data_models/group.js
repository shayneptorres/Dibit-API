import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Group = new Schema({
    name: String,
    desc: String,
    createdAt: Date,
    updatedAt: Date,
    dibs: [{type: Schema.Types.ObjectId,ref:"Dib"}],
    users: [{type: Schema.Types.ObjectId,ref:"User"}],
    creator: {type: Schema.Types.ObjectId,ref:"User"},
    managers: [{type: Schema.Types.ObjectId,ref:"User"}]
})

module.exports = mongoose.model("Group",Group);