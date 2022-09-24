const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    description:{
        type:String,
    },
    restrictionCategories:{
        type: [String]
    },
    category:{
        type: String,
    },
    imgSrc:{
        type:String,
    }
})

module.exports = new mongoose.model("FoodItem", FoodItemSchema);