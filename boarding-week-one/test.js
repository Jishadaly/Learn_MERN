let a = [0, 3, 4, 7, 1, 5, 0, 9, 8, 7, 2, 0, 6, 5];

function findRepeatedEl(arr) {

    let repeatedEl = []
    let counted = {}

    for (let i = 0; i < arr.length; i++) {

        if (counted[arr[i]]) {
            continue;
        }

        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                count++
            }
        }
        if (count > 0) {
            repeatedEl.push(arr[i]);
            counted[arr[i]] = true
        }
        
        console.log(counted);

    }

    return repeatedEl

}

// console.log(findRepeatedEl(a));

function* generateMultiple() {
    let num = 100

    for (let i = 0; i < 10; i++) {
        yield num
        num = num - 5
    }
}

function multipleOfFive(num) {
    let generate = generateMultiple();

    let interval = setInterval(() => {
        const { value, done } = generate.next();

        if (!done){
            console.log(value);

        } else {
            clearInterval(interval)
        }
    }, 500)
}

// multipleOfFive()


function reverseString(str) {
    if (str == '') {
        return ''
    }

    return reverseString(str.substr(1)) + str[0]
}

// console.log(reverseString('jishad ali'));

function sortAstringFreq(str) {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    let res = ''
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }

    return res
}

// console.log(sortAstringFreq('jjjaaabb'))

function findSmallestSec(arr) {
    let smallest = Infinity;
    let secSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secSmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] > smallest && arr[i] < secSmallest) {
            secSmallest = arr[i]
        }
    }

    return secSmallest
}
// console.log(findSmallestSec([2, 5, 3, 6, 58, 4]));

function reverseAdigit(num) {

    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        // console.log(digit);
        reversed = reversed * 10 + digit
        num = Math.floor(num / 10);
    }

    return reversed
}