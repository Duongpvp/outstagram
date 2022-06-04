import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";

// Routes
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

// Connect to Mongo Database
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log(`Connected to MongoDB server on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post/", PostRoute);
