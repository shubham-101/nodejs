const html= require('html');
console.log(`hello how are you there`)
const server = createServer((req,res)=>{
    res.write('hello this is the first thing i wrote')
    res.end()
})
server.listen(5000);