// const express = require('express');
// const router = express.Router();
// router.get('/',(req,res,next)=>{
//     res.send(`<p>Welcome page</p>`)
// })
// module.exports = router;

const express = require('express');
const path = require('path')
const rootDirectory = require('../path/path')

const router = express.Router();
router.get('/',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootDirectory,'views','shop.html'))
})
module.exports = router;
