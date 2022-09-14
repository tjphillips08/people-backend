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
router.get('/:id', async (req,res) =>{
    try{
    res.status(200).json(await Recipes.findById(req.params.id))
    }
    catch(err){
        console.log(err)
    }
})
//Update
router.put("/:id", async(req,res) =>{
    try{
    res.status(200).json(await Recipes.findByIdAndUpdate(req.params.id, req.body,{new:true}))
    }
    catch(err){
        console.log(err)
    }
})
//Delete
router.delete('/:id', async (req,res) =>{
    try{
    res.status(200).json(await Recipes.findByIdAndRemove(req.params.id))
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router;