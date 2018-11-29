const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    date:String,
    time:String,
    user_id: String
});

module.exports = mongoose.model("Food", FoodSchema);




// Data of :
// The food
// Restaurant
// Institutions
// Available food
// Food_id needs food_id