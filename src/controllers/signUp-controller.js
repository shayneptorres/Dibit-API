import mongoose from "mongoose";
import { Router } from "express";
import User from "../data_models/user";
import passport from "passport";
import config from "../config";

export default ({ config, db }) => {
    let api = Router();
    // '/v1/signUp/'

    api.post("/", (req,res) => {
        User.register(new User({
            username: req.body.email
        }), req.body.password,
         function(err,user){
            if (err){
                res.send(err);
            }

            passport.authenticate(
                "local",{
                    session:false
            })(req, res, () => {
                res.status(200).send({
                    "data":user,
                    "message":"You successfully created a user!"
                });
            });
        });
    });


    return api;
}