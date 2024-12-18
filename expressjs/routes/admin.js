var express = require('express')
const path = require('path')

const router = express.Router()
const rootDirectory = require('../path/path')

// express router 
// router.get('/add-product',(req,res,next)=>{
//     res.send(`<h1>Add product<h1><form action = "http://localhost:3000/admin/store-product" method = "POST"><input type="text" name= "title"><input type="submit" value= "submit"></form>`)
// })

router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDirectory,'views','add-product.html'))
    // next()
})


router.post('/store-product',(req,res,next)=>{
    console.log("form data ",req.body)
    res.send(`<p>product submitted</p>`)
})

module.exports = router ;


