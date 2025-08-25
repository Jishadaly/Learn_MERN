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

// setImmediate(() => {
//   console.log('setImmediate  1');
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

// const iterator = gen(10)
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// const user = {
//     name: 'jishad',
//     job: 'dev'

// }

// // const greet = user.__proto__.place = 'mpm';

// // // console.log(user.place);

// //  useEfect(()=>{

// //     return ()=>{
// //         //clear any evnt 
// //     }
// //  },[])


// - Rahul Ranjan
// luhaR najnaR

// function reverse(name) {

//    const str = name.split(' ')
//     const stack = [];

//     for (let i = 0; i < str; i++){
//         stack.push(str[i]);
//     }

//     console.log(stack);

//     const newStack = [];

//     for (let i = 0; i < str.length; i++) {
//         newStack.push(stack.pop())
//     }

//     console.log(newStack);
//     return newStack.join('')
// }

// console.log(reverse('Rahul Ranjan'));


let name = "jishad";
let arr = name.split('');

function quickSort(str) {

    if (str.length < 2) {
        return str
    }

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

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

}

// console.log(quickSort(arr));


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

// const str = 'Rahlu Ranjan'
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


function removeDuups(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                j--
            }
        }
    }

    return arr
}

const array = [2, 3, 6, 8, 3, 3, 3, 2, 2, 1, 1, 2, 2, 6, 8, 9, 15, 10]
// console.log(removeDuups(array))
// console.log(removeDuups([1,1,1]));

function removeDupsWithIndex(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

// console.log(removeDupsWithIndex(array))

const stds = [
    {
        "id": 12345,
        "name": "John Doe",
        "subjects": [
            { "subject": "math", "marks": 85 },
            { "subject": "science", "marks": 90 },
            { "subject": "history", "marks": 78 },
            { "subject": "english", "marks": 92 }
        ],
    },
    {
        "id": 67890,
        "name": "Jane Smith",
        "subjects": [
            { "subject": "math", "marks": 92 },
            { "subject": "science", "marks": 88 },
            { "subject": "history", "marks": 76 },
            { "subject": "english", "marks": 95 }
        ],
    },
    {
        "id": 13579,
        "name": "Alice Johnson",
        "subjects": [
            { "subject": "math", "marks": 78 },
            { "subject": "science", "marks": 94 },
            { "subject": "history", "marks": 82 },
            { "subject": "english", "marks": 88 }
        ],
    }
]

// return an an array of objects containing each students name and sum of their mark = done

function stdWithMark(students) {
    const stdAndMark = [];
    for (let std of students) {
        let totalMark = 0;

        for (let sub of std.subjects) {
            totalMark += sub.marks;
        }

        stdAndMark.push({ name: std.name, totalMark: totalMark });
    }

    return stdAndMark
}

// console.log(stdWithMark(stds))



function logenstsubStr(str) {
    let longeststr = 'str'
    let longestCount = 0
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }

        if (count > longestCount) {
            longestCount = count
            longeststr = str[i]
        }
    }
    return longeststr
}

const str = 'fbsdjkkkkkkkkksssssssssjjjjjjjjjjjsguyh';
// console.log(logenstsubStr(str));


function task1(callback) {
    setTimeout(() => {
        console.log('task 1 done')
        callback('data form 1');
    }, [1000])
}


function task2(callback) {
    setTimeout(() => {
        console.log('task 2 done')
        callback('data from 2');
    }, [1000])
}


function task3(callback) {
    setTimeout(() => {
        console.log('task 3 done')
        callback('data from 3');
    }, [1000])
}


// task1((data) => {
//     console.log(data)

//     task2((data) => {
//         console.log(data)

//         task3((data) => {
//             console.log(data)

//             console.log('finished')
//         })
//     })
// })


function async1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data from async 1')
        }, [1000])
    })
}

function async2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data from async 2')
        }, [1000])
    })
}


async function fetchData() {
    let data1;
    let data2;
    try {
         data1 = await async1();
         data2 = await async2();

        // console.log(data1, data2)
    } catch (err) {
        console.log(err);
        return
    }

       return [data1 , data2]

}

console.log(fetchData());

