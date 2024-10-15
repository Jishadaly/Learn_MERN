function sample() {
    let outer = 'this is outer'

    function newFun() {
        console.log(outer);
    }

    return newFun;
}

const call = sample();

// console.log(call);

function* generate() {
    yield 1 + 1;
}

const gen = generate()
// console.log(gen.next());


// function newOne(callback){
//         console.log("hello");
//         callback();
// }

// function callback(){
//     console.log('world');
// }

// const abc = newOne(callback);

// // console.log(abc);

// function async1(){
//     return Promise((resolve)=> setTimeout(()=> resolve('async1') ,1000))
// }

// function async2(){
//     return Promise((resolve)=> setTimeout(()=> resolve('async2') ,1000))
// }
// async1.then((data)=>  )



const array_3d = [
    [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ],
    [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
    ],
    [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0, [1, 0]], 0
    ]
];

function countZeros(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count = count + countZeros(arr[i]);
        } else {
            if (arr[i] == 0) {
                console.log(arr[i]);
                count++;
            }
        }

    }
    return count;

}

console.log(countZeros(array_3d));

// output should be [785, 106]

function reveres(arr) {
    let reversedArray = [];

    for (let i = arr.length; i >= 0; i--) {
        console.log(arr[i]);
        let str = '';
        str = str + arr[i];
        let add = '';

        reversedArray.push();
    }
    return reversedArray;
}

const arr = [601, 587]
// const result = reveres(arr);
// console.log(result);

const word = 'tytttuup';

// output should be ttt

function findLongestSub(str) {
    let count = 0;
    let longest = '';

    for (let i = 0; i < str.length; i++) {
        let n = 0;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                longest = str[j]
                n++
            }
        }

        if (n > count) {
            count;
        }

    }
    return longest;
}

console.log(findLongestSub(word));