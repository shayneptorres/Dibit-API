import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Dib = new Schema({
    name: String,
    desc: String,
    createdAt: Date,
    updateAt: Date,
    rank: Number,
    favorite: Boolean,
    user: {type:Schema.Types.ObjectId, ref:"User"},
    group: {type:Schema.Types.ObjectId, ref:"Group"}
})

module.exports = mongoose.model("Dib",Dib);
