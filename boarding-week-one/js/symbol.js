
const sym  = Symbol('id');
sayHello();

const obj = {
    name : 'jishad',
    [sym] : '29482048393'
}

console.log(obj[sym]);



function sayHello(){
    console.log('jishad ali');
    
}