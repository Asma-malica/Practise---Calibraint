var http = require('http')
var app = http.createServer((req,res)=>{
//  console.log(req);
//  console.log(req.url);
//  console.log(req.method)
//  console.log(req.headers)
//  res.writeHead(200,"content-Type:test/html");
 res.setHeader("content-Type","test/html");
 res.write(`<p>Hi</p>`)
 res.end()
})
app.listen(3000,()=>{
    console.log("server running ")
})