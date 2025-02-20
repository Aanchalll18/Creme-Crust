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

const listFood=async(req,res)=>{
    try {
        const food=await foodModel.find({});
        res.json({
            success:true,
            data:food
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

const delteFood=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}

export { addFood,delteFood,listFood };
