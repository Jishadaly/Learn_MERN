function a(){
    var b = 10;

    function fun(){
        console.log(b)
    }

    b=20;
    return fun;
}

const fun = a()
fun()


function multiply(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const result = multiply(10)(20)(30);
// console.log(result);
