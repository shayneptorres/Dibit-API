import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../db";

let router = express();

initializeDB(db => {
    router.use(middleware({config,db}));

    // API routes
});

export default router;