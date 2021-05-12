const fs = require('fs');

// Bloking, syncronous way 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `this is what we know avocado : ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);

// Non-blocking, asyncronus way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
    if (err) return console.log('ERROR')
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data1,data2);
    fs.readFile(`./txt/append.txt`,'utf-8', (err,data3) => {
        console.log(data3);
        fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err => {
            console.log('your file has been written');
        })
    }) 
  });
});
console.log("will read file"); 