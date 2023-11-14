const sayHello = (name) => {
    console.log(`Hello world ${name}`);
}

module.exports = sayHello
console.log(module);

// create a module which will take a number and return its cube and import that module in our index.js file and csall it with 15