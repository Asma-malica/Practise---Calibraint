// // var http = require('http')
var url = require('url')
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const shop = require('./routes/shop')
const path = require('path')

app.use(bodyParser.urlencoded())
// app.use('/about',(req,res,next)=>{
//     console.log("second middleware")
//     // res.write(req.url)
//     console.log(req.method)
//     res.send(`<p>about</p>`)
// })

// app.use('/',(req,res,next)=>{
//     console.log("first middleware")
//     console.log(req.url)
//     console.log(req.method)
//     res.send(`<p>home</p>`)
//     // next()
// })



app.use('/admin',admin)
app.use(shop)
// other than the given url if any url given means it gives 404 page not found error 
// app.use((req,res,next)=>{
//     res.status(404).send(`<h1>404 Page not found </h1>`)  
// })

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

// app.use('/',(req,res,next)=>{
//     console.log('Always works');
//     next()
    
// })
app.listen(3000,()=>{
    console.log("server running")
})






  