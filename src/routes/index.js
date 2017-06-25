import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../db";

// Controllers
import user from "../controllers/user";
import login from "../controllers/login-controller";
import signUp from "../controllers/signUp-controller";

let router = express();

initializeDB(db => {
    router.use(middleware({config,db}));

    // API routes
    router.use("/users",user({config,db}));
    router.use("/login",login({config,db}));
    router.use("/signUp",signUp({config,db}));
});

export default router;