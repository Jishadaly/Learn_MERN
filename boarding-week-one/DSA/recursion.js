function fact(n){
    if (n==0) {
        return 1
    }

    return n * fact(n-1)
}

const num = 5;
const result = fact(num);
// console.log(result);

function sumNumber(n){
    if (n==0) {
        return 1
    }
    return n + sumNumber(n-1);
}

// console.log(sumNumber(10));

function fibonacci(n){
    if (n <= 1) {
        return 1
    }
    
    return  fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(10));

function reverseString(str){
    if (str === '') {
        return ''
    }
    console.log(str.charAt(0));
    console.log(str);
    return reverseString(str.substr(1)) + str.charAt(0)
}

// console.log(reverseString('nayana'));

function printEven(n){
    if (n <= 0 ) {
        return 1
    }
    if(n % 2 === 0 ){
        return printEven(n-1)
    }
    
}

// console.log(printEven(10));