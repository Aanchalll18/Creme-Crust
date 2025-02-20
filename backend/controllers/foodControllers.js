// import express from 'express'
// import foodModel from "../Models/foodModel.js";
// import fs from 'fs'

// const addFood =async(req,res) =>{

//     let image_filename=`${req.file}`;

//     const food=new foodModel({
//         name:req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename
//     })

//     try {
//         await food.save();
//         res.json({success:true,message:"Food Added"})

//     } catch (error) {
//        console.log(error)
//        res.json({
//         success:false,
//         message:error.message
//        })
//     }
// }
// export {addFood}

import foodModel from "../Models/foodModel.js";

const addFood = async (req, res) => {
	try {
		// Extract fields from req.body
		console.log("Received Body:", req.body);
		console.log("Received File:", req.file);
		const { name, description, price, category } = req.body;
		console.log("Received Body:", req.body);
		console.log("Received File:", req.file);

		let image_filename = req.file ? req.file.filename : null;

		// Validate required fields
		if (!name || !description || !price || !category) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}

		// Create new food item
		const food = new foodModel({
			name,
			description,
			price,
			category,
			image: image_filename,
		});

		await food.save();
		res.json({ success: true, message: "Food Added", food });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: error.message });
	}
};

export { addFood };
