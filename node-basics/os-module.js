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