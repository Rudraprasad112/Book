import * as dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cors from 'cors'
import Route from './routes/LoginRoute.js'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();
const PORT = 801|| process.env.PORT;

app.use(bodyParser.json())
app.use(cors())

app.use("/main",Route)

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connect to db");
        
    } catch (error) {
        console.log("connection failed");
        
    }
}

connectDb().then(

    app.listen(PORT,()=>{
        console.log("connect to :",PORT);
        
    })
)