import mongoose from "mongoose";
import { Router } from "express";
import User from "../data_models/user";
import bodyParser from "bodyParser";
import passport from "passport";
import config from "config";

import { generateAccessToken, respond, authenticate} from "../middleware/authmiddleware";

export default ({ config, db }) => {
    let api = Router();

    // '/v1/login/'
    api.post("/",passport.authenticate(
        "local", {
            "session":false,
            "scope":[]
        }), generateAccessToken, respond
    );
}
