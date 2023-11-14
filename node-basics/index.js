// const { readFile, readFileSync, readSync } = require('fs');
// const text = readFileSync('./sample.txt','utf8');
// console.log(text)
// console.log(__dirname);
// console.log(__filename);

// setInterval(()=>{
//     console.log('Hi')
// }, 1000)

const names = require('./names') 
const sayHello = require('./utils')
const shopdata = require('./alternative-module')
console.log(shopdata);
// const sayHello = (name) => {
//     console.log(`Hitesh ${name}`);
// }

// sayHello('hi')
sayHello(names.hitesh)
sayHello(names.patil)