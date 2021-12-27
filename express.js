const express = require("express");
const app = express();
const authenticationRouter = require("./router/authenticationRouter");
const homeRouter = require("./router/homeRouter");
const bollywoodRouter = require("./router/bollywoodRouter");
const foodRouter = require("./router/foodRouter");
const hollywoodRouter = require("./router/hollywoodRouter");
const technologyRouter = require("./router/technologyRouter");
const travelRouter = require("./router/travelRouter");

const cors = require("cors");
app.use(cors());


app.use(express.json());











app.use("/api/v1/auth",authenticationRouter);
app.use("/pi/v1/homea",homeRouter);
app.use("/api/v1/bollywood",bollywoodRouter);
app.use("/api/v1/food",foodRouter);
app.use("/api/v1/hollywood",hollywoodRouter);
app.use("/api/v1/technology",technologyRouter);
app.use("/api/v1/travel",travelRouter);




module.exports = app;