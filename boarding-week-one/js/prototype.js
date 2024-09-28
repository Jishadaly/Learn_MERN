const obj = {
    name :'jishad',
    place :'mpm'
}

obj.__proto__.greet = function(){
    console.log(this.name , this.place);
    
}

console.log(obj.greet);