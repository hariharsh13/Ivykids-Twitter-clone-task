import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";


const app = express();
dotenv.config(); 

const connect = () =>{
    mongoose.set("strictQuery" , false);
    mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to mongodb database");
    })
    .catch((err)=>{
        throw err;
    });

}; 

app.use(cookieParser());
app.use(express.json());
app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/tweets" , tweetRoutes);



app.get('/',(req,res)=>{
    res.send("hello");
})


app.listen(8000 , ()=>{
    connect();
    console.log("server started on port 8000");
});