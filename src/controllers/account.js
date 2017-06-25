import mongoose from "mongoose";
import { Router } from "express";
import Account from "../data_models/account";
import bodyParser from "bodyParser";
import passort from "passport";
import config from "../config";

import { generateAccessToken, respond, authenticate } from "../middleware/authmiddleware";

export default ({ config, db }) => {
    let api = Router();


    // '/v1/account/'

    api.post("/register", (req,res) => {
        Account.register(new Account({username: req.body.email}), req.body.password, function(err,account){
            if (err){
                res.send(err);
            }

            passort.authenticate(
                "local",{
                    session:false
            })(req, res, () => {
                res.status(200).send("YAY!");
            });
        });
    });


    return api;
}