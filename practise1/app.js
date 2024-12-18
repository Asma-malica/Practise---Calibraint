// process.argv -> to access the command line arguments 
// console.log(process.argv[0]) //nodejs location
// console.log(process.argv[1]) //current file location
// console.log(process.argv[2]) // passed 3rd argument 

// const a = capital(process.argv[2] || "world" );
// console.log(`Hello ${a}`);

// function capital(str){
//     return str
//     .trim()
//     .toLowerCase()
//     .split("  ")
//     .map((word) => word.charAt(0).toUpperCase()+word.slice(1))
//     .join(" ")
// }

// const http = require('http');
// const server = http.createServer((req,res)=>{
    //one method of writng 
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/html")
//     res.end(`<p>Hi !</p>`)
// });
// server.listen(3000,()=> {
//     console.log("server running on 3000");
// })

//simple webserver creation
// const http = require('http');
// const url = require("url");
// const server = http.createServer((req,res)=>{
//     const parseUrl = url.parse(req.url , true);
//     console.log(parseUrl);
//     if(parseUrl.pathname === "/"){
//         res.writeHead(200,{"content-Type":"text/html"});
//         res.write("<h1>home</h1>")
//         res.end()
//     }
//     else if(parseUrl.pathname === "/about"){
//         res.writeHead(200,{"content-Type":"text/html"});
//         res.write("<h1>about</h1>")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{"content-Type":"text/html"});
//         res.write("<h1>Page not found</h1>")
//         res.end()
//     }

   

// });
// server.listen(3000,()=> {
//     console.log("server running on 3000");
// })

//single export
// const add=(a,b)=>{
//     return a+b;
// }
// module.exports = add

// multiple module export  as like that of objects
// const add=(a,b)=>{
//     return a+b;
// }
// const sub=(a,b)=>{
//     return a-b;
// }
// module.exports = {add:add,sub:sub};