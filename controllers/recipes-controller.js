const express = require('express');
const router = express.Router();
const {Recipes} = require("../models")

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', async (req, res) => {
    try{
    res.status(200).json(await Recipes.find({}));
    }
    catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try{
    res.status(201).json(await Recipes.create(req.body))
    }
    catch (err){
        console.log(err)
    }
})
//show route
router.get('/:id', (req,res) =>{
    try{
    res.status(200).json(await Recipes.findById(req.params.id))
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/:id', (req,res) =>{
    res.status(200).json({message:"Delete this recipe" + req.params.id})
})

router.put("/:id", (req,res) =>{
    res.status(200).json({message:"recipe update route" + req.params.id})
})

module.exports = router;