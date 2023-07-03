const express = require ('express');
const Animal = require ('../models/animal');
const router = express.Router();

//controllers

router.get('/',async(req,res)=> {
    const allAnimals = await Animal.find({})
    res.render('animals/index.ejs',{animals:allAnimals})
})

router.get('/new', (req,res)=> {
    res.render('animals/new.ejs')
})

router.post('/', async (req,res)=>{
    req.body.extinct = req.body.extinct === 'on' ? true : false
    await Animal.create(req.body)
    res.redirect('/animal')
})

router.get ('/:id' , async (req,res)=>{
    const id = req.params.id
    const animal = await Animal.findById(id)
    res.render('animals/show.ejs',{animal})
})

router.delete('/:id',async (req,res)=>{
    const id = req.params.id
    await Animal.findByIdAndDelete(id);
    res.redirect('/animal')
})

router.get ('/:id/edit', async(req,res)=>{
    const id=req.params.id
    const animal = await Animal.findById(id)
    res.render('animals/edit.ejs',{animal})
})

router.put('/:id', async (req,res)=>{
    const id=req.params.id
    req.body.extinct = req.body.extinct === 'on' ? true:false
    await Animal.findByIdAndUpdate(id,req.body);
    res.redirect('/animal')
})


module.exports = router;