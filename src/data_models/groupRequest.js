import mongoose from "mongoose";

let Schema = mongoose.Schema;

let GroupRequest = new Schema({
    createdAt: Date,
    updatedAt: Date,
    group: {type: Schema.Types.ObjectId, ref:"Group"},
    requester: {type: Schema.Types.ObjectId, ref:"User"},
    requestee: {type: Schema.Types.ObjectId, ref:"User"},
    accepted: Boolean,
    completed: Boolean
})

module.exports = mongoose.model("GroupRequest",GroupRequest);