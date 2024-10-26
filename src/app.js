import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));


//use of cors that is coss origin
app.use(express.json({limit:"16kb"}))  // for eccepting json file
app.use(express.urlencoded({extended: true, limit: "16kb"})) // for eccepting direct from uurl extended is use for object under object 
app.use(express.static("public"))

app.use(cookieParser())

export {app}
