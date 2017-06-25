import mongoose from "mongoose";
import { Router } from "express";
import User from "../data_models/user";
import bodyParser from "bodyParser";
import passort from "passport";
import config from "../config";

import { generateAccessToken, respond, authenticate } from "../middleware/authmiddleware";

export default ({ config, db }) => {
    let api = Router();


    // '/v1/user'

    

    return api;
}