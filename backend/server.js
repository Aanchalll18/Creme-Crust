// import express from 'express'
// import cors from 'cors'
// import { connectDB } from './config/db.js'
// import foodRouter from './routes/foodRoute.js'

// const app=express()
// const port=4000


// app.use(cors())
// app.use(express.json())
// //app.use(cors())

// connectDB();

// app.use("/api/food",foodRouter)

// app.get("/",(req,res)=>{
//     res.send("API is working")
// })

// app.listen(port,()=>{
//     console.log(`server started at ${port}`)
// })

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // Add this to handle form-data
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Connect to database
connectDB();

// Routes
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
    res.send("API is working");
});

// Start server
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
