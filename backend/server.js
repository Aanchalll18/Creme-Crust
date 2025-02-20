import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'

const app=express()
const port=4000

app.use(express.json())
app.use(cors())

connectDB();


app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})