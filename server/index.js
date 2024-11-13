import express from 'express'
import mainRouter from './routes/main.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDb from './ConnectDB/index.js';

const app = express()


app.use(express.json())

dotenv.config({
    path: ".env"
})

app.get("/" ,(req ,res)=>{
    res.json({
        message : " THe server is running Properly"
    })
})

app.use("/api/v1" , mainRouter)

connectDb().then(()=>{
    try {
        app.listen(process.env.PORT || 8000 , ()=>{
            console.log(`The localhost is running at http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
       console.log(error) 
    }
})
