// require('dotenv').config({path:'./env'});
import connectDB from "./db/db.js";
import dotenv from "dotenv";

import { app } from "./app.js";
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


            // one approach to connect database in index.js

 
// import express from "express";
// import { config } from './../node_modules/dotenv/lib/main.d';
// const app=express();

// ;(async ()=>{
//     try {
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error", ()=>{
//             console.log("mongoDB didn't connect");
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listenning o port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR :", error)
//         throw err
//     }
// })()

