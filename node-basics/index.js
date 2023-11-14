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




// Built in modules ->  modules which are buil inside node and helps us to develop applications
 // FS -> file system
 // PATH -
 // OS 
 //HTTP


 // OS -> a lot of built in methods which allows us to interact with out operating system
 const os = require('os');

 // info about the current user
 const user = os.userInfo();
 console.log(user);

 //method that returns sytem uptime in seconds 
 console.log(`The system Uptime is ${os.uptime()} seconds`);

 const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
 }

 console.log(currentOS);
 