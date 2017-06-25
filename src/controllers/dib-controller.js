import mongoose from "mongoose";
import { Router } from "express";
import {authenticate} from "../middleware/authmiddleware";
import Dib from "../data_models/dib"
import User from "../data_models/user"

export default ({ config, db }) => {
    let api = Router();

    // Rotues

    // '/v1/dibs/

    
    `
    Create dib body structure
    {
        user_id: String,
        name: String,
        desc: String,
    }
    `
    // Create a dib
    // authenticate requires the "Authorization" header key
    // and Bearer ${auth key here} as the value
    api.post("/", authenticate, (req, res) => {

        User.findById(req.body.user_id, (err, user) => {
            if (err){
                res.send({
                    success:false,
                    message:"Could not find user with given user_id: " + err,
                    data:{}
                })
            }

            let newDib = new Dib();
            newDib.name = req.body.name
            newDib.desc = req.body.desc
            newDib.createdAt = + new Date()
            newDib.updatedAt = + new Date()
            newDib.rank = 0
            newDib.favorite = false

            newDib.save(err => {
                if (err){
                    res.send({success:false,message:err,data:{}})
                }
                user.dibs.push(newDib);

                user.save(err => {
                    if (err){
                        res.send({success:false,message:err,data:{}})
                    }
                    res.json({
                        success:true,
                        message:"You've successfully created a dib",
                        data:newDib
                    })
                })
            })
        })

        
    });

    return api;
}