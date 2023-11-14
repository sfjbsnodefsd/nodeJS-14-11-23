const { readFile, readFileSync} = require('fs');

// reading files

// readFileSync('./hello.txt', 'utf8' , (err, txt) => {
//     console.log(txt); // second
// })
// console.log("Log 2"); // first

// global elements

// __dirname  -> path to the current directory
// __filename - filename
//__ require - function to use modules ( CommonJS)
// module - info about the current module ( file)
// process - info about the enc where the program is being exxecuted.

// console.log(__dirname);
// setInterval( () => {
//     console.log("hello world");
// }, 1000);

// modules
// EVERY FILE IN NODE IS A MODULE
// a module is an encapsualted code ( only share the minimum)

const names = require('./names')
const sayHello = require('./utils')
const shopdata = require('./alternative-module')
console.log(shopdata);

sayHello("Nishant");
sayHello(names.kumar);
sayHello(names.virat);