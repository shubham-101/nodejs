const os = require('os');
const apple = os.userInfo();
console.log(apple);
console.log(`the system uptime is ${os.uptime()} seconds`);
const currentOS ={
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS);