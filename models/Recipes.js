///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const RecipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  calories: Number,
},{timestamps: true});

const Recipes = mongoose.model("Recipes", RecipeSchema);

module.exports = Recipes
