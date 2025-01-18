const std = [
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

// return an an array of objects containing each students name and sum of their mark

function sumMarkEachstd(object) {
  let stdWithTotelMark = [];
  for (let obj of object) {
    let sum = 0;
    for (let sub of obj.subjects) {

      sum += sub.marks
    }

    const student = {
      "Name": obj.name,
      "TotelMark": sum
    }

    stdWithTotelMark.push(student)
  }
  return stdWithTotelMark;
}

// console.log(sumMarkEachstd(std))

// //remove all adjecent odd elements from an array
function removeAdjecentOfOdd(arr) {
  let i = 0;

  while (i < arr.length - 1) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      arr.splice(i, 2);
      i = Math.max(0, i)
    } else {
      i++
    }
  }
  return arr
}

// console.log(removeAdjecentOfOdd([3, 7, 3, 2, 4, 2, 3, 9]));

// prevent right click from the entire application(react)

// find the average of students mark who are in 10 th class

// find the student name with second largest mark in 10th class

// find the student whose name ends in a vowel

function getStudebtNameLastletterVowel(object) {

  const string = 'aeiou'
  const students = []
  for (let obj of object) {
    const name = obj.name.split(' ').join('');
    // console.log(name[name.length-1]);

    const isVowel = string.includes(name[name.length - 1])

    if (isVowel) {
      students.push(obj.name);
    }
  }
  return students
}

// console.log(getStudebtNameLastletterVowel(std));

// get all the fibonacci numbers within the limit of 100 using reccursion.

// multiple fetch calls at time
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3'
];

const fetchAllData = async () => {
  try {
    // Map over URLs, creating an array of fetch promises
    const fetchPromises = urls.map(url => fetch(url));

    // Wait for all fetches to complete
    const responses = await Promise.all(fetchPromises);

    // Map responses to JSON parsing promises
    const dataPromises = responses.map(response => response.json());

    // Wait for all JSON parsing to complete and retrieve data
    const allData = await Promise.all(dataPromises);
    console.log(allData); // Logs array of data from each endpoint
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// fetchAllData();


//password validator
// function validatePassword(password) {
//   const minLength = 8;
//   const hasUpperCase = /[A-Z]/.test(password); // Checks for uppercase letters
//   const hasLowerCase = /[a-z]/.test(password); // Checks for lowercase letters
//   const hasDigit = /[0-9]/.test(password);     // Checks for digits
//   const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Checks for special characters

//   if (password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
//     return true; // Valid password
//   } else {
//     return false; // Invalid password
//   }
// }

function validatePassword(pass) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(pass)
  const hasLowerCase = /[a-z]/.test(pass)
  const hasSpecialChar = /[!@#$%^&*()]/.test(pass)
  const hasDigit = /[0-9]/.test(pass)

  if (pass.length >= minLength && hasDigit && hasUpperCase && hasLowerCase && hasSpecialChar) {
    return true
  } else {
    return false;
  }
}

// Example usage:
// console.log(validatePassword("Aa1@password")); // true
// console.log(validatePassword("password")); // false
// console.log(validatePassword("A1@")); // false


// merge tow objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
//you can use pread operater also const merge = { ...obj , ...obj }
const merged = Object.assign({}, obj1, obj2);
// console.log(merged); // Output: { a: 1, b: 3, c: 4 }
//with loadash
// const _ = require('lodash');
// const mergedWithLoadash = _.merge({}, obj1, obj2);
// console.log(mergedWithLoadash); // Output: { a: 1, b: { x: 10, y: 20 }, c: 4 }



// check object is empty
const isEmpty = (obj) => Object.keys(obj).length === 0;

// Example usage
// console.log(isEmpty({})); // true
// console.log(isEmpty({ a: 1 })); // false
// const isEmpty = (obj) => Object.entries(obj).length === 0;

// console.log(isEmpty({})); // true
// console.log(isEmpty({ a: 1 })); // false

// const isEmpty = (obj) => {
//     for (let key in obj) {
//       return false; // If any property exists, return false
//     }
//     return true; // If no properties, return true
//   };

// console.log(isEmpty({})); // true
// console.log(isEmpty({ a: 1 })); // false



//   today without time
const today = new Date();
const dateWithoutTime = today.toLocaleDateString();
// console.log(dateWithoutTime); // Output: e.g., "10/25/2024" (format may vary based on locale)

//flip string

// function flipCase(str) {
//   return str
//     .split('') // Convert string to an array of characters
//     .map(char => {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join(''); // Join the array back into a string
// }


function flipCase(str) {
  const string = str.split('')

  let stringnew = string.map((char) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase()
    } else {
      return char.toUpperCase();
    }
  })

  return stringnew.join('')

}
// Example usage
// const flipped = flipCase("Hello World!");
// console.log(flipped); // Output: "hELLO wORLD!"


//ramdome array element each call
function* randomElementGenerator(arr) {
  while (true) {
    const ram = Math.floor(Math.random() * arr.length)
    // console.log(ram);
    yield arr[ram]
  }
}

// Example usage
const colors = ["red", "green", "blue", "yellow"];
const colorGenerator = randomElementGenerator(colors);

// console.log(colorGenerator.next().value);
// console.log(colorGenerator.next().value);
// console.log(colorGenerator.next().value);


// console.log(colorGenerator.next().value); // e.g., "blue"
// console.log(colorGenerator.next().value); // e.g., "green"
// console.log(colorGenerator.next().value); // e.g., "yellow"

//days left until target day
// function daysUntil(targetDate) {
//   const today = new Date()
//   const target = new Date(targetDate)

//   const dateinMilSec = target - today;

//   const daysLeft = Math.ceil(dateinMilSec / (1000 * 60 * 60 * 24))

//   return daysLeft
// }


function daysUntil(targetDate) {
  const today = new Date();
  const target = new Date(targetDate);

  const dateinMilSec = target - today;
  console.log(dateinMilSec);
  const daysLeft = Math.ceil(dateinMilSec / (1000 * 60 * 60 * 24))

  // console.log(daysLeft);
  return daysLeft
}
// Example usage
// const daysLeft = daysUntil("2024-12-25"); // Target date: Dec 25, 2024
// console.log('days left :',daysLeft); // Output: Number of days until Dec 25, 2024

const a = '1' + 1;
// console.log(typeof(a) , a)


function groupAnagrams(arr) {

  const map = {}

  for (let str of arr) {
    let word = str.split('').sort().join('');

    if (!map[word]) {
      map[word] = []
    }
    map[word].push(str);

  }
  return Object.entries(map)

}

// Example usage
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const groupedAnagrams = groupAnagrams(input);
// console.log(groupedAnagrams);



function day35afterToday() {

  const today = new Date()
  const day = new Date(today);
  day.setDate(day.getDate() + 35);
  return day.toDateString();

}

// console.log(day35afterToday());

// const findSecondLargest = require("../DSA/practice");

// const result = findSecondLargest([2, 4, 2, 0, 6, 4, 7])
// console.log(result);

const object = {
  name: 'jishad',
  place: 'malapuram',
  age: 23
}

const keys = Object.keys(object)

const key = keys[keys.length - 1]

delete object[key]

console.log(object);



function* generateNum() {
  let num = 100;

  for (let i = 0; i < 10; i++) {
    yield num;

    num = num - 5
  }

}


function printMultple() {

  const generator = generateNum()
  const interval = setInterval(() => {
    const { value, done } = generator.next()
    if (!done) {
      console.log(value);
    } else {
      clearInterval(interval)
    }
  }, 1000);
}

// printMultple()

function sortSecq(str) {

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

  let string = ''

  for (let i = 0; i < arr.length; i++) {
    string += arr[i]
  }

  return string

}

const str = 'abcaab';
// console.log(sortSecq(str));



const sorted = str.split('').sort().join('')
// console.log(sorted);



// function expandString(str) {

//   let i = 0;
//   let result = ''

//   while (i < str.length) {
//     let char = str[i]
//     i++

//     let strCount = ''
//     while (i < str.length && !isNaN(str[i])) {
//       console.log(str[i]);
//       strCount += str[i]
//       i++
//     }
//     let count = parseInt(strCount)

//     for (let j = 0; j < count; j++) {
//       result += char
//     }
//   }
//   return result
// }

function expandString(str) {
  let i = 0;
  let result = ''
  while (i < str.length) {
    let char = str[i]
    i++

    let charCount = ''
    if (i < str.length && !isNaN(str[i])) {
      charCount += str[i]
      i++
    }

    let count = parseInt(charCount);

    for (let j = 0; j < count; j++) {
      result += char
    }
  }
  // console.log(result);

  return result
}

let stri = 'a2b1c5'
console.log(expandString(stri));

function extractNegatives(arr) {

  let arrr = [];

  for (let val of arr) {
    for (let items of val) {
      // console.log(items);
      let entires = Object.entries(items).flat(2).filter((val) => !isNaN(val) && val < 0)
      arrr.push(entires)
    }
  }

  return arrr.flat(1).sort((a, b) => b - a)
}

const arr1 = [
  [{ a: [4, 34, 53], p: -124 }],
  [{ a: [4, -9, 53], p: 4 }],
  [{ a: [4, 334, 53], p: 4 }],
];

// console.log(extractNegatives(arr1));


function largeDigit(num) {
  let max = 0;

  while (num > 0) {
    let digit = num % 10;

    if (digit > max) {
      max = digit
    }

    num = Math.floor(num / 10);
  }

  return max
}

let digit = 2576326;

// console.log(largeDigit(digit));


function removeDup(arr) {
  let set = [];

  for (let i = 0; i < arr.length; i++) {
    let isDup = false;

    for (let j = 0; j < set.length; j++) {
      if (arr[i] === set[j]) {
        isDup = true;
        break;
      }
    }

    if (!isDup) {
      set.push(arr[i]);
    }

  }

  return set;
}

const testArr = [1, 2, 3, 2, 5, 6, 8, 6, 8, 5, 8, 5, 8, 4, 5, 7, 8, 7, 7, 7, 7, 7, 7];
console.log(removeDup(testArr));

function reversSeq(arr) {
  let result = arr.map((num) => parseInt(num.toString().split('').reverse().join('')))
  return [result[1], result[0]]
}

const arr = [435, 524]

// console.log(reversSeq(arr));

function reverseWord(str) {
  let result = ""
  let word = ""
  let words = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      words.push(word)
      word = ''
    } else {
      word += str[i]
    }
  }
  words.push(word)

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i]
    result += ' 'qqqqqq
  }

  return result;

}

// console.log(reverseWord('Hello World'))

function rotatesArray(arr, k) {
  let n = arr.length
  k = k % n;
  let rotated = []

  for (let i = n - k; i < n; i++) {
    rotated.push(arr[i])
  }

  for (let i = 0; i < n - k; i++) {
    rotated.push(arr[i])
  }

  return rotated;
}

// rotatesArray();

function kthLargest(arr, k) {
  let rs = arr.sort((a, b) => b - a)
  return rs[k - 1];
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 3));  // Output: 5

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    arr[count++] = 0
  }

  return arr;
}
// console.log(moveZeros([0, 1, 0, 3, 12]));

function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (mid === target) {
    return mid;
  }
  else if (target > arr[mid]) {
    return binarySearchRec(arr, target, mid + 1, right)
  }

  return binarySearchRec(arr, target, left, mid - 1)
}

// console.log(binarySearchRec([1, 2, 3, 4, 5, 6, 7], 3));

function count(str) {

  let result = ''
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      console.log(str[i]);

      count++
    } else {
      result += str[i - 1] + count
      count = 1
    }
  }

  return result;
}

// console.log(count('aaabbccca'));


function allSubStrings(str) {
  let subs = []

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      subs.push(str.slice(i, j))
    }
  }
  return subs
}

// console.log(allSubStrings('jishad'));

function dupChars(str) {
  let charCount = {}
  let dup = []
  for (let char of str) {
    charCount[char] = char
  }

  for (let key in charCount) {

    if (charCount[key] > 1) {
        dup.push(key)
    }
  }
  return dup
}

//console.log(dupChars('nnnnnnnnnnnnnsnnsnsnrwnrwnr'));

function object1(str1, str2) {
  let charCount = {};

  for (let char of str2) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (let char of str1) {

    if (!charCount[char]) {
      return char

    } else {
      charCount[char]--

    }

  }

}

console.log(object1('jishadaly', 'jishadal'))

// function groupAnagrams (words){
//   let map = {}
//   for(let word of words){
//     // console.log('word :', word);

//        let sorted = word.split('').sort().join('')
//       //  console.log(sorted);

//        if(!map[sorted]){
//         map[sorted] = []
//        }

//        map[sorted].push(word)
//   }
//   return map
// }

const words = ["eat", "tea", "tan", "ate", "nat", "bat"]
// console.log(groupAnagrams(words));


function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1

  while (left <= right) {

    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}


// console.log(isPalindrome('malayalam'));

function getFib(num) {

  if (num == 0) {
    return []
  }

  if (num === 1) {
    return [0]
  }


  if (num === 2) {
    return [0, 1]
  }

  const fibSeq = getFib(num - 1);
  console.log(fibSeq);
  
  let nextvalue = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]

  fibSeq.push(nextvalue)

  return fibSeq


}
// console.log(getFib(10));

// convert prices into int ""₹80.00"" -> 80
//Create props proxy for HOC