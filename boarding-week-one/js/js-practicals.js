[
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
// get all the fibonacci numbers within the limit of 100 using reccursion. =  done

function printNum() {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i >= 0);
}

// printNum();

//callback 

function greet(name, callback) {
  console.log('helo', name);

  bye();
}

function bye() {
  console.log('byeeee');
}

// greet('jishad', bye);


//callback hell
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fecthing data');
      resolve()
    }, 3000)
  })
}

function processData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('proseesing data');
      resolve()
    }, 2000)
  })

}

function saveData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('saving data');
      resolve()
    }, 3000)
  })
}

function finish() {
  console.log("finished");
}


// getData()
//   .then(()=> processData())
//   .then(()=> saveData())
//   .then(()=> finish());

async function exicute() {
  await getData();
  await processData();
  await saveData();
  finish();
}

//  exicute();

function* printNum() {
  let i = 1;
  while (i < 10) {
    if (i % 2 === 0) {
      yield i
    }
    i++
  }


}

const generate = printNum();
// console.log(generate.next().value);

(function () {
  console.log('imedeate inviokde');
})
// ();



// function logenstsubStr(str) {
//   let longest = '';
//   let globCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     let count = 0 ;

//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] === str[j]) {
//         count ++
//       }
//     }
//     if ( count >  ) {

//        longest =  word;
//     }
//   }
//   return longest;
// }

const str = 'fbsdjkkkkkkkkksssssssssjjjjjjjjjjjsguyh';
// console.log(logenstsubStr(str));


function findLongestStr(str) {
  let map = new Map();
  let string = '';
  for (let i = 0; i < str.length; i++) {
   map.set( str[i] ,  (map.get(str[i]) || 0) + 1 )
  }



  // console.log(map);
  

  let strq = ''
  let count = 0;
  map.forEach((key, index) => {
    // console.log(key);
    if (key > count) {
      count = key
      strq = index
    }

  });
  let result = ''
  while(count > 0){
    console.log(count);
    result += strq
    count --
  }

  return result
}

// console.log('lll',findLongestStr(str));

// let countDown;

function statCountDown(reminingTime) {

  // let reminingTime = sec;

 let countDown = setInterval(() => {
    console.log(reminingTime);
    reminingTime--;

    if (reminingTime === 0) {
      clearInterval(countDown);
      console.log('finished');
    }
  }, 1000)

}


// statCountDown(5);


// function printNum(num) {
//   let count = 1;

//   do {
//     console.log("Iteration: " + count);  // This will run at least once
//     count++;
//   } while (count <= num);
// }

// printNum(10);


function sample(value = 'dev') {
  console.log('hello ' + value);
}

// sample();

function sumOfDigits(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10; // Get the last digit
    number = Math.floor(number / 10); // Remove the last digit
  }

  return sum;
}

const number = 738367;
const result = sumOfDigits(number);
// console.log(result); // Output: 34


function findlargesWord(str) {
  let word;
  let maxCount = 0;
  let split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
    if (split[i].length > maxCount) {
      maxCount = split[i].length;
      word = split[i]
    }
  }
  return word
}

const sentence = 'versatile programming language that language often poses challenging programming'
// console.log(findlargesWord(sentence));

function removeDup(str) {
  const split = str.split(' ');
  const arr = [...new Set(split)]
  return arr
}
// console.log(removeDup(sentence));

function secondLargest(arr) {

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i]
    }
  }

  return secondLargest;
}

// console.log(secondLargest([4, 3, 66, 3, 22, 5, 10]));

// // remove elements which start lettter from vowels 
const arar = ['a', 'e', 'i', 'o', 'u'];
const words = ['abhi', 'jishad', "ashna", 'hanna']

function removeVowels(words, vowels) {
  return words.filter((word) => !vowels.includes(word[0]))
}
// console.log(removeVowels(words, arar));

const object1 = {
  firsName: "ananth",
  lastName: "ezuza",
  place: 'kochi',
  discrict: "tndia"
}

const object2 = {
  firsName: "ananth",
  lastName: "ezuza",
  place: 'kochi',
  discrict: "tndia"
}


function compare(obj1, obj2) {

  key1 = Object.keys(obj1)
  key2 = Object.keys(obj2)

  if (key1.length !== key2.length) {
    return false
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }

    return true;
  }
}

// console.log(compare(object1 , object2));

const num = '-+ 89 -[]4232113';

function extractNum(num) {
  let str = '';
  for (let i = 0; i < num.length; i++) {
    if (!isNaN(parseInt(num[i]))) {
      str += num[i]
    }
  }
  return str
}

// console.log(extractNum(num));

function factory(name, age, place) {
  return {
    name: name,
    age: age,
    place: place,
    greet: function () {
      console.log('hello iam ' + name);
    }
  }
}

const person1 = factory('jishad', 76, 'mampuram');
person1.greet()

function generateRamdom() {
  return Math.floor(Math.random() * 1000)
}
// console.log(generateRamdom());


function getTomorowDate() {
  let tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1)
  return tommorow.toDateString()
}

// console.log(getTomorowDate());

function sumDigit(num) {

  let sum = 0;

  while (num > 0) {

    let digit = num % 10

    sum += digit;

    num = Math.floor(num / 10);
  }

  return sum
}

// console.log("e", sumDigit(12));

function filterString(arr) {
  return arr.filter((value) => typeof (value) === 'string');
}

// console.log(filterString([1, 'two', 3, 'four', 5, true, 'six', 7]));

const nums = [4, 5, 6, 3, 2, 6, 4];

function mostRepeating(num) {
  const map = new Map();

  for (let i = 0; i < num.length; i++) {
    map.set(num[i], (map.get(num[i]) || 0) + 1)
  }

  console.log(map);

  let count = 0;

  for (let v of map) {
    if (v[1] > count) {
      return v[0]
    }
  }

}

// console.log(mostRepeating(nums));
// map.set(str[i], (map.get(str[i]) || 0) + 1)

const originalArray = [1, 2, [3, 4]];

const shallowCopy = [...originalArray]
shallowCopy[2][0] = 99;
// console.log(originalArray);

const deepCopy = JSON.parse(JSON.stringify(originalArray))
deepCopy[2] = 99;
console.log(structuredClone(originalArray));

console.log(originalArray);
// console.log(deepCopy);


function validParanthesis(s) {
  const stack = []

  const matchingBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let char of s) {
    console.log(matchingBrackets[char]);

    if (matchingBrackets[char]) {
      stack.push(char)
    }

    else if (char === ')' || char === '}' || char === ']') {
      if (!stack.length || matchingBrackets[stack.pop()] !== char) {
        return false
      }
    }
  }

  return stack.length === 0;

}


// const res = validParanthesis('[{}]');

// console.log(res);

function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);

    if (target == arr[mid]) {
      return mid + 1
    }
    if (target < arr[mid]) {
      rightIndex = mid - 1
    } else {
      leftIndex = mid + 1
    }
  }
}
// console.log(binarySearch(['abhi',  'ashna' ,'jishad' , 'nayana'] , 'jishad'))  

function sumOfnum(num) {
  let sum = 0;

  while (num > 0) {

    let digit = num % 10;

    sum += digit

    num = Math.floor(num / 10);
  }

  return sum;

}
// console.log(sumOfnum(3738))

const samFun = eval('(function fun(){ return 10; })')
console.log(samFun());

// asyncTask1(() => {
//   asyncTask2(() => {
//       asyncTask3(() => {
//           asyncTask4(() => {
//               console.log("Done");
//           });
//       });
//   });
// });
console.log('/////////////////')


function fetchData() {

  return new Promise((res)=>{
    setTimeout(() => {
      // console.log('fetchData data..');
      res('data from fetching = done');
    }, 1000);
  })
}

function proccessingData() {

  return new Promise((res , rej)=>{

    setTimeout(() => {
      // console.log('prossessing data..');
      rej('errroe');
    }, 1000)
  });
  }


  // fetchData().then((data)=>{
  //   console.log(data);
  //    proccessingData().then((data)=>{
  //      console.log(data)
  //    })
  // })

// const data = Promise.any([proccessingData() , fetchData()]).then((data)=>{
// console.log(data);

// }).catch((e)=>{
//   console.log(e);
  
// })

function convetPrice(str){
    let num  = '';
    for(let i=0;i<str.length;i++){
      if (str[i] === '.') break;
       if(!isNaN(str[i])){
        console.log(str[i]);
        num += str[i]
       }
    }

    return parseInt(num)
}

console.log(convetPrice("₹480.00"))