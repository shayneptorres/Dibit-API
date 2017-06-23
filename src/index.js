import http from "http";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";

let LocalStrategy = require("passport-local").Strategy

import config from "./config";
import routes from "./routes";

let app = express();

app.server = http.createServer(app);

// JSON parsing

app.use(bodyParser.json({
    limit:config.bodyLimit
}));

// Passport config
app.use(passport.initialize());
let Account = require("./data_models/account");
passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},
    Account.authenticate()
))
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// API routes v1
app.use("/v1",routes);

app.server.listen(config.port);
console.log("Started listening on port ",app.server.address().port);

export default app;

