const os = require('os');
const { captureRejectionSymbol } = require('events');
const user = os.userInfo();
console.log('++++++++++++++')
console.log(user)
console.log('++++++++++++++')


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS)