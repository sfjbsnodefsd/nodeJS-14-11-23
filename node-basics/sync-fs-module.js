const {readFileSync, writeFileSync} = require("fs");


const first = readFileSync("./content/first.txt",'UTF8');
const second = readFileSync("./content/second.txt",'UTF8');
console.log(first,second);

writeFileSync('./content/result.txt',`Here is the result from the files firts and second : 
${first} ${second}`, {flag :'a'});