// Built in modules ->  modules which are buil inside node and helps us to develop applications
 // FS -> file system
 // PATH -
 // OS 
 //HTTP

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','UTF8',(err,result) => {
   if(err) {
      console.log(err);
      return
   } 
   const first = result;
   readFile("./content/second.txt",'UTF8', (err,result) => {
      if(err) {
         console.log(err);
         return
      } 
      const second = result;
      writeFile('./content/result-async.txt',`Here is the result from async model 
      ${first}, ${second}`,(err,result) => {
         if(err) {
            console.log(err);
            return
         } 
         console.log(result);

      })

   })
})