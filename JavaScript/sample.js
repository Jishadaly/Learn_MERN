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



function dayAfter25() {
    const today = new Date();
    today.setDate(today.getDate() + 25)

    return today.toLocaleString().split(',')[0]
}
// console.log(dayAfter25())

function deepCopyofObj(obj) {
    const copyObj = JSON.parse(JSON.stringify(obj))
    copyObj.skills = 99;

    return copyObj
}

const orginalObj = {
    name: 'jishad',
    age: 23,
    // skills: ['d', [1], 'c',]
}

// console.log('dcopy :',deepCopyofObj(orginalObj));
// console.log('orginal : ',orginalObj);

function reverseArrayAndELements(arr) {
    let reversed = []
    let element = '';
    for (let i = 0; i < arr.length; i++) {
        let item = parseInt(arr[i].toString().split('').reverse().join(''))
        reversed.push(item)
    }
    
    return reversed.reverse()
}

let array = [738, 209, 103, 11];

// console.log(reverseArrayAndELements(array))

function removeLastProperty(obj) {
    console.log(obj);
    let objArr = Object.entries(obj)
    let key = objArr[objArr.length - 1][0]

    delete obj[key]

    return obj

}
// console.log(removeLastProperty(orginalObj));

let duplicatesArr = [2, 33, 4, 2, 2, 5, 3, 7, 9, 4, 4, 7, 8, 7, 2]
// function deleteDupInArray(arr) {
//     let dups = []
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 count ++
//                 continue;
//             }
//         }

//         if(count > 0){
//             dups.push(arr[i])

//         }
//     }
//     return dups
// }

// console.log(deleteDupInArray(duplicatesArr));


function deleteDup(arr) {
    let dups = []
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                arr.splice(j, 1)
            }
        }


    }
    return arr;
}

// console.log(deleteDupInArray(duplicatesArr));

function removeAdjecentOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            arr.splice(i, 2)
            i--
        }
    }
    return arr
}

// console.log(removeAdjecentOdd(duplicatesArr))

function removeVowels(arr) {
    let newArr = []
    let vowels = 'aeiou';
    for (let name of arr) {
        if (vowels.includes(name[0])) {
            newArr.push(name);
        }
    }
    return newArr
}

let nameArr = ['john', 'edverd', 'ibrahimovick', 'abhishekh', 'messi']
// console.log(removeVowels(nameArr))


let subStrings = 'arjjjjjklwwwwiiwaapq'
function countOfsubstrs(str) {
    let map = new Map();
    for (let letter of str) {
        map.set(letter, (map.get(letter) || 0) + 1)
    }

    return map

}
// console.log(countOfsubstrs(subStrings));

function highestOccurence(arr) {
    let map = new Map();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    // console.log(map);

    let num = 0
    let higestKey = 0;

    for (let [key, value] of map) {
        console.log(key, value);
        if (value > num) {
            num = value
            higestKey = key
        }
    }

    return higestKey;

}
console.log(highestOccurence(duplicatesArr));
// console.log(duplicatesArr);

function* generateFun(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            yield arr.splice(i, 1)[0]
            i--
        }
    }
}
// const generator = generateFun(duplicatesArr)

// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

// console.log(generator.next().done)
// console.log(duplicatesArr);

// function* removeVowels(arr){

// }

// console.log(removeVowels(nameArr))

function* generatorEven(arr) {
    let vowel = 'aeiou'
    let i = 0
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (vowel.includes(word[0])) {
            yield arr.splice(i, 1)[0]
            i--
        }
    }

}

// const generatorEv = generatorEven(nameArr)
// console.log(generatorEv.next().value);
// console.log(generatorEv.next().value);
// console.log(generatorEv.next().value);
// console.log(generatorEv.next().done);

function sortBasedFrequncy(str) {
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[j] > str[j + 1]) {
                [str[j], str[j + 1]] = [str[j + 1], str[j]]
            }
        }
    }
    return str.join('');
}

// console.log(sortBasedFrequncy(subStrings));

function findSecondSmallest(arr) {

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

    return secSmallest;

}

// console.log(findSecondSmallest(duplicatesArr));

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secLargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > secLargest) {
            secLargest = arr[i]
        }
    }

    return secLargest;
}

// console.log(findSecondLargest(duplicatesArr));

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isempty() {
        return this.size === 0
    }

    appent(value) {
        const node = new Node(value);
        if (this.isempty()) {
            this.head = node;
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }

        this.size++
    }

    delteDup() {

        const seen = new Set();
        let curr = this.head;
        seen.add(curr.value);

        while (curr.next) {
            if (seen.has(curr.next.value)) {
                curr.next = curr.next.next
                this.size--
            } else {
                seen.add(curr.next.value)
                curr = curr.next
            }
        }

    }

    printList() {
        let curr = this.head;
        while (curr) {
            process.stdout.write(curr.value + " -> ");
            curr = curr.next;
        }
        console.log("null");
    }

    removeOdd() {

        while (this.head.value % 2 !== 0) {
            this.head = this.head.next;
            this.size--
        }

        let curr = this.head;
        while (curr.next) {
            if (curr.next.value % 2 !== 0) {
                curr.next = curr.next.next
                this.size--
            } else {
                curr = curr.next;
            }
        }
    }


}

const list = new LinkedList()

// list.appent(7)
// list.appent(30)
// list.appent(10)
// list.appent(9)
// console.log(list);
// list.delteDup()
// list.removeOdd()
// list.printList()
// console.log(list.size);

function validatePass(pass) {
    let isCaps = /[A-Z]/.test(pass);
    let isLower = /[a-z]/.test(pass);
    let isNumber = /[0-9]/.test(pass);
    let isSymbol = /[@!$%*]/.test(pass)

    if (!isCaps || !isLower || !isNumber || !isSymbol) {
        return false
    }

    return true

}

// console.log(validatePass('jishad12@3A'));

function mergeTowObj(obj1, obj2) {

    for (let key in obj2) {
        obj1[key] = obj2[key]
    }

    return obj1

}
const profile = {
    name: 'jishad',
    age: 23,
}

const subj = {
    marks: {
        maths: 20,
        chemistry: 20
    }
}

// console.log(mergeTowObj(profile, subj));

function longestWord(str) {
    let longest = ''
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            console.log(word.length);
            if (longest.length < word.length) {
                longest = word
            }
            word = '';
        } else {
            word = word + str[i]
        }

    }

    if (word.length > longest.length) {

        longest = word
    }


    return longest;
}

// console.log(longestWord('thus sjb sbsb sbbbws'));

function todayDateOnly() {
    const today = new Date();
    return today.toISOString().split('T')[0]
}

// console.log(todayDateOnly());

function countDown(num) {
    let timer = setInterval(() => {
        if (num === 0) {
            clearInterval(timer);
        }
        console.log(num);
        num--
    }, 1000);
}

// console.log(countDown(10));

function subString(str) {
    const substrings = []
    for (let i = 0; i < str.length; i++) {
        let subStr = ''
        for (let j = i; j < str.length; j++) {
            subStr += str[j];
            substrings.push(subStr);
        }
    }
    return substrings;
}
// console.log(subString('abc'));

function* gen(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            yield arr[i]
        }
    }
}

function printEven(arr) {
   
    const generate = gen(arr);
    let timer = setInterval(() => {
        const { value, done } = generate.next();
        if (!done) {
            console.log(value);
        } else {
            clearInterval(timer)
        }

    }, 1000)

}


console.log(printEven([4, 3, 2, 16, 9, 12]))