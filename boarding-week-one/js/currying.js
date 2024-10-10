function function1(num1){
    return function function2(num2){
        return function function3(num3){
            return num1 + num2 + num3
        }
    }
}

const result = function1(1)(3)(5)
console.log(result);