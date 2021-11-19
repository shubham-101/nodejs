const { readFileSync , writeFileSync} = require('fs');
console.log('hahhhahhahh yo pieer u wanna come out a here ');
const pahala = readFileSync('./first/one.txt' , 'utf8');
const dusra = readFileSync('./first/two.txt' , 'utf8');
writeFileSync(
    './first/third.txt', 
    `this is imaginary and written on new file`
    // `this is the edited one : ${pahala} , ${dusra}`
    );    
