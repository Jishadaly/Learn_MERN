// function fact(n) {
//     if (n == 0) {
//         return 1
//     }
//     return n * fact(n - 1);
// }

function fact(n) {
    if (n == 0) {
        return 1
    }

    return n * fact(n - 1)
}
const num = 5;

// const result = fact(num);
// console.log(result);

function sumNumber(n) {
    if (n == 0) {
        return 1
    }
    return n + sumNumber(n - 1);
}

// console.log(sumNumber(10));

// function fibonacci(n) {
//     if (n <= 1) {
//         return 1
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

function fibonacci(n) {
    if (n <= 1) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}
// console.log(fibonacci(10));

// function reverseString(str) {
//     if (str === '') {
//         return ''
//     }

//     return reverseString(str.substr(1)) + str.charAt(0);
// }

function reverseString(str) {
    if (str == '') {
        return ''
    }

    return reverseString(str.substr(1)) + str[0]
}

// console.log(reverseString('nayana'));

function printEven(n) {
    if (n <= 0) {
        return 1
    }
    if (n % 2 === 0) {
        return printEven(n - 1)
    }

}

// console.log(printEven(10));

// function isPalindromeRecursive(str) {
//     if (str.length <= 1) {
//         return true
//     }
//     if (str[0] !== str[str.length - 1]) {
//         return false
//     }
//     return isPalindromeRecursive(str.slice(1,  -1))
// }

function isPalindromeRecursive(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindromeRecursive(str.slice(1, -1))
}

// console.log(isPalindromeRecursive('malayalam'));

// function to find size of a string

function sizeOfString(str) {
    if (str === '') return 0

    return sizeOfString(str.substr(1)) + 1
}

// console.log(sizeOfString('ABC'));

function fact(num) {
    if (num == 0) {
        return 1
    }

    return num * fact(num - 1)
}

// console.log(fact(5))

function palindrome(str){
    if (str.length < 1) {
        return true
    }

    if (str[0] !== str[str.length - 1]) {
        return false
    }

    return palindrome(str.slice(1,-1))
}

// console.log(palindrome('malayalam'))

function sumArray(arr){

    if (arr.length <= 0) {
        return 0
    }

    console.log(arr);
    
    return  arr[0] + sumArray(arr.splice(1))
    
}

// console.log(sumArray([2,3 , 4,3,5,3]))