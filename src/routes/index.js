import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../db";

import account from "../controllers/account"

let router = express();

initializeDB(db => {
    router.use(middleware({config,db}));

    // API routes
    router.use("/account",account({config,db}));
});

export default router;