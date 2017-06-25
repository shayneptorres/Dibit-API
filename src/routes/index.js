import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../db";

// Controllers
import login from "../controllers/login-controller";
import signUp from "../controllers/signUp-controller";

let router = express();

initializeDB(db => {
    router.use(middleware({config,db}));

    // API routes
    router.use("/login",login({config,db}));
    router.use("/signUp",signUp({config,db}));
});

export default router;