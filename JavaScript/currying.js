
function curryedAdd(x){
  return function(y){
   return function(z){
    return x + y + z
   }
  }
}

const add2 = curryedAdd(1);
const add3 = add2(5)

console.log(add3(10));