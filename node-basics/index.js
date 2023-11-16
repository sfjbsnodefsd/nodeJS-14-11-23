// const { readFile, readFileSync, readSync } = require('fs');
// const text = readFileSync('./sample.txt','utf8');
// console.log(text)
// console.log(__dirname);
// console.log(__filename);

// setInterval(()=>{
//     console.log('Hi')
// }, 1000)


const { readFileSync, writeFileSync, readFile, writeFile} = require("fs")

const first = readFileSync('./content/first.txt', 'UTF8')
const second = readFileSync('./content/second.txt', 'UTF8')
writeFileSync('./content/test.txt', `Result: ${first} ${second}`)
const names = require('./names') 
const sayHello = require('./utils')
const shopdata = require('./alternative-module')
const osData = require('./os-module')
const path = require('./path-module')
// const { readFileSync } = require('fs')
readFile('./content/first.txt', 'UTF8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'UTF8', ()=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Result for async: ${first}, ${second}`, (err, result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })

})




console.log(shopdata);
console.log('***')
console.log(first, second);

console.log('***')

// const sayHello = (name) => {
//     console.log(`Hitesh ${name}`);
// }

// sayHello('hi')
sayHello(names.hitesh)
sayHello(names.patil)


const http = require('http')
const server = http.createServer((req, res)=>{
    // res.write("Welcome to our homepage")
    // res.end()

    if(req.url === '/'){
        res.end("Welcome to our homepage");
    }
    if(req.url === '/about'){
        res.end("Welcome to out About section")
    }
    res.end(`<h1>404:Page not page</h1>`);
})
server.listen(4000)