// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log('Promise 1');
//   })
//   .then(() => {
//     console.log('Promise 2');
//   });

// process.nextTick(() => {
//   console.log('nextTick 1');
// });

// process.nextTick(() => {
//   console.log('nextTick 2');
// });

// console.log('End');


// //start
// //end
// //nextTick 1
// //nextTick 2
// //settimeout
// //promis 1
// //promis 2


// function* gen(num) {

//     for (let i = 0; i < num.length; i++) {
//         yield i
//     }

// }

// // const iterator = gen(10)
// // console.log(iterator.next().value);
// // console.log(iterator.next().value);
// // console.log(iterator.next().value);

// const user = {
//     name: 'jishad',
//     job: 'dev'

// }

// // const greet = user.__proto__.place = 'mpm';

// // // console.log(user.place);

// //  useEfect(()=>{
// //     //jfheh

// //     return ()=>{
// //         //clear any evnt 
// //     }

// //  },[])


// // - Rahul Ranjan
// // luhaR najnaR

// function reverse(name) {


//    const str = name.split(' ')

//     const stack = [];

//     for (let i = 0; i < str; i++) {
//         stack.push(str[i])
//     }

//     console.log(stack);

//     const newStack = [];

//     for (let i = 0; i < str.length; i++) {
//         newStack.push(stack.pop())
//     }

//     console.log(newStack);
//     return newStack.join('')
// }

// // console.log(reverse('Rahul Ranjan'));


let name = "jishad";
let arr = name.split('');

function quickSort(str) {
    if (str.length < 2) {
        return str
    }

    console.log(str);

    let leftArr = []
    let rightArr = []
    let pivot = str[str.length - 1];

    for (let i = 0; i < str.length; i++) {
        if (arr[i] <= pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr) , pivot , ...quickSort(rightArr)]

}

console.log(quickSort(arr));


function createIncrement() {
    let count = 0;

    function incrementCount() {
        count++

        return count
    }

    return incrementCount
}

let increment = createIncrement();

// console.log(increment());


function reverseSequnse(str) {

    let words = str.split(' ');

    let stack = []
    let reversedWords = [];


    words.forEach((word) => {
        for (let letter of word) {
            stack.push(letter)
        }


        console.log(stack);
        let reversedWord = '';

        while (stack.length > 0) {
            reversedWord += stack.pop();
        }
        reversedWords.push(reversedWord);
    });

    return reversedWords.join(' ')
}

const str = 'Rahlu Ranjan'
// console.log(reverseSequnse(str));

function quickSort(str) {
    if (str.length < 2) {
        return str
    }

    let rightArr = []
    let leftArr = []
    let pivot = str[str.length - 1]

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] < pivot) {
            leftArr.push(str[i])
        } else {
            rightArr.push(str[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const string = 'jishad ali'
// const word = quickSort(string)

function mergeSort(str) {



    console.log(str);


    if (typeof str === 'string') {


        str = str.split(''); // Convert string to array
    }

    if (str.length < 2) {
        return str
    }
    let mid = Math.floor(str.length / 2);


    let leftArr = str.slice(0, mid)
    let rightArr = str.slice(mid)



    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {

    let sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}


function insertionSort(str) {

    if (typeof str === 'string') {
        str = str.split('')
    }

    for (let i = 1; i < str.length; i++) {
        let leterToinsert = str[i]
        let j = i - 1

        while (j >= 0 && str[j] > leterToinsert) {
            str[j + 1] = str[j]
            j--
        }

        str[j + 1] = leterToinsert;
    }

    return str
}

// console.log(insertionSort(string));

function selectionSort(str) {
    if (typeof str === 'string') {
        str = str.split('')
    }
    let min;

    for (let i = 0; i < str.length; i++) {
        min = i
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] < str[min]) {
                min = j
            }
        }

        let temp = str[i]
        str[i] = str[min]
        str[min] = temp
    }

    return str
}

// console.log(selectionSort(string))

