const obj = {
    name :'jishad',
    place :'mpm'
}

obj.__proto__.greet = function(){
    console.log(this.name , this.place);
    
}

// console.log(obj.greet);

Array.prototype.log = function (){
    console.log(this.forEach((v)=> console.log(v)
   ));
}

let arr = [1,3,5,6]; 

arr.log()