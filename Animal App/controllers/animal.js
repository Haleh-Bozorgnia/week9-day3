const express = require ('express')
const Animal = require ('../models/animal')
const router = express.Router()

router.get('/',async(req,res)=> {
    const allAnimals = await Animal.find({})
    res.render(
        'index.ejs',
        {animals:allAnimals}
    )
})

router.get('/new', async(req,res)=> {
    res.render('new.ejs')
})

router.post('/', async (req,res)=>{
    console.log(req.body)
    req.body.extinct = req.body.extinct === on ? true : false
    await Animal.create(req.body)
    res.redirect('/animal')
})
module.exports = router;