import foodModel from "../Models/foodModel.js";
import fs from 'fs'

const addFood =async(req,res) =>{

    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        
    } catch (error) {
       console.log(error)
       res.json({
        success:false,
        message:error.mess
       }) 
    }
}
export {addFood}