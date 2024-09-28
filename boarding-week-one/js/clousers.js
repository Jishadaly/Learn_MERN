function a(){
    var b = 10;

    function fun(str){
        console.log(b,c,str)
    }

    b=20;
    return fun;
}

b = 30;
let c = 1000;
// a()('jishad')


function multiply(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const result = multiply(10)(20)(30);
console.log(result);
