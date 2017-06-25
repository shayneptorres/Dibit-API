import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import mongoose from "mongoose";
import User from "../data_models/user";

const TOKENTIME = 60*60*24; // 1 Day
const SECRET = "NOT VERY SECURE";

let authenticate = expressJwt({secret: SECRET});

let generateAccessToken = (req, res, next) => {
    req.token = req.token || {};
    req.token = jwt.sign({
        id: req.user.id
    }, SECRET,{
        expiresIn: TOKENTIME
    })
    next();
}

let respond = (req, res) => {
    
    User.findOne({username:req.user.username},(err,user) => {
        if (err){
            res.json({success:false,data:{},message:"Could not find the user"})
        }

        res.status(200).json({
            token: req.token,
            data:user
        });

    });

    
}

module.exports = {
    authenticate,
    generateAccessToken,
    respond
}