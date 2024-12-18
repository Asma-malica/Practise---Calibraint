require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session');
const app = express()
const port = process.env.port ;

mongoose.connect(process.env.db_url,{useNewUrlParser:true})
const db = mongoose.connection;
db.on('error',(err)=>console.log(err))
db.once('open',()=>console.log('connected to db'))

//middleware for request body parsing
app.use(express.urlencoded({ extended: false }))
// Purpose: Parses incoming requests with URL-encoded payloads (typically from HTML form submissions) and makes the data available in req.body.
// extended: false:
// False: The querystring library is used for parsing, which supports only simple key-value pairs ({ key: value }).
// True: The qs library would be used, allowing for more complex nested objects ({ key: { subkey: value } }).
app.use(express.json());
// Parses incoming requests with JSON payloads and makes the data available in req.body.
// Use Case: This is commonly used for APIs where the client sends data as JSON in the request body.


// session setup 
// : Allows the application to maintain user-specific data (a session) across multiple requests, like storing messages or user login information.
app.use(
    session({
      secret: "my-secret-key",
      resave: false,
      saveUninitialized: true,
    })
  );

//  Middleware for Flash Messages
  app.use((req, res, next) => {
    res.locals.message = req.session.message; // Makes session message available in views
    delete req.session.message; // Deletes the message after it's accessed
    next(); // Passes control to the next middleware
});

app.use(express.static('uploads'))

// setting a template engine 
app.set('view engine','ejs')


// route prefix 
app.use("",require("./routes/routes"))



app.listen(port,()=>{
    console.log("server running")
})




// // routes setup 
// // handles the incoming GET requests to the root url 
// app.get('/',(req,res)=>{
//     res.send("Hello ")
// })


