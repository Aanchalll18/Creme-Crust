import mongoose from 'mongoose'

export const connectDB=async()=>{

    await mongoose.connect('mongodb+srv://cremeandcrust:cremeandcrust@cluster0.12orr.mongodb.net/creme-crust').then(()=>console.log('DB connected!!'))
}