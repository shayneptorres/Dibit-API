import mongoose from "mongoose";
import { Router } from "express";
import Account from "../data_models/account";
import bodyParser from "bodyParser";
import passort from "passport";
import config from "../config";

import { generateAccessToken, respond, authenticate } from "../middleware/authmiddleware";

export default ({ config, db }) => {
    let api = Router();
    return api;
}