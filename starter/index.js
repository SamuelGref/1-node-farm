const fs = require('fs');
const http = require('http')
const url = require('url')

////////////////////////////
//// Filles


// Bloking, syncronous way 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `this is what we know avocado : ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);

// Non-blocking, asyncronus way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     if (err) return console.log('ERROR')
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data1,data2);
//     fs.readFile(`./txt/append.txt`,'utf-8', (err,data3) => {
//         console.log(data3);
//         fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err => {
//             console.log('your file has been written');
//         })
//     }) 
//   });
// });
// console.log("will read file"); 

////////////////////////////
//// Servers 

const  server = http.createServer((req, res) => {
    const pathName =req.url 

   if(pathName === '/' || pathName === '/overview') {
       res.end('this is the OVERVIEW');
   } else if (pathName === '/product') {
       res.end('this is the Product');
   } else {
       res.writeHead(404, {
           'Content-type': 'text/html',
           'my-own-header': 'hello-world'
       });
       res.end('<h1>page not found!</h1>')
   }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('listneing to requests on port 8000');
})
