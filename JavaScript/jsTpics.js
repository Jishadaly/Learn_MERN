// (function(){
// console.log("this is ummediat invoked funvtions");
// })();

// const promis = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//       console.log("data fetched");
//     }, 2000);
// }).then((res)=>{
//   console.log(res);
// }).catch((Error)=>{
//   console.log(Error);
// })

// function * simpleGeneretor(){
//   yield 1;
//   yield 2;
// }

// const genertor = simpleGeneretor();

// for (const value of genertor){
//   console.log(value);
// }

// function multiply(a , b , callback){
//     const result  = a * b

//     callback(result)
// }

// function handleResult (result){
//     console.log(result);
// }

// multiply(10,3,handleResult)

// function* addGeneretor(a,b){
//    yield a+b
//    yield a * b
//    yield a -b
// }

// const genertor = addGeneretor(10,2)
// const result = genertor.next().value;
// const resultMul = genertor.next().value;
// const resultSub = genertor.next().value;
// console.log(result);
// console.log(resultMul);
// console.log(resultSub);

// async function getData(){
//   try {
//     const data1 = await getDataFromServer();

//   } catch (error) {
//     console.log(error);
//   }
// }

// function getDataFromServer(){  
//   setTimeout(()=>{
//     console.log("fetch data");
//   },3000)
// }
// getData();


// function  cretetePerson(name , age) {
//    return {
//     name:name,
//     age:age,
//     greet:function(){
//       console.log(`my name is ${name} and my age is ${age}`);
//     }
//    }
// }


// const person1 = cretetePerson('alice' , 30)
// person1.greet()

// const arr1 = [1 ,2,3,4,5]
// const arr2 = [1 ,2,3,4,5]

// const combained = arr1.concat(arr2)
// console.log(combained);

// const obj = {
//   a: 10 ,
//   b:20,
//   c:30
// }

// // const keys = Object.entries(obj)
// // console.log(keys);

// // const numbers = [1, 2, 3, 4, 5];

// const double =  numbers.filter( num=>  num % 2 === 0 )
// console.log(double);

// const dupArry = [...numbers , ...double]
// console.log(dupArry);


// function outerFunction(){
//   const outerVariable = 'iam from the outer function'

//   function innerFunction(){
//      console.log(outerVariable);
//   }

// // return innerFunction
// // }

// // const innerFunction = outerFunction();

// // innerFunction()

// function* addGeneretor(a,b){
//    yield a + b
//    yield a * b
//    yield a % b
//    yield a - b

// }


// const genertor = addGeneretor(1,5)
// const multiply = genertor.next().value; 
// const mod = genertor.next().value; 
// const subtract = genertor.next().value;
// console.log(multiply);
// console.log(subtract);

// function restParmas(...args){
//    console.log(args);
//    let totel = 0;
//    for(const x of args){
//       totel += x;
//    }

//    return totel
// }


// function spread(a,b,c,obj){
//   let result  = a.concat(b)

//   return result;
// } const obj ={
//   hello : "hey"
// }

// let a = [1,2,34,5,6] ; b = [4,5,2,5,2,4] ; c = [23,43,2,5]
// // console.log(spread(a,b,c,obj));

// function reverseString(str){
//   if (str.length  < 2) {
//     return str
//   }



//   return reverseString(str.substring(1)) + str.charAt(0);
// }


// function reverseWords(str) {
//   // Base case: if the string has no space or is empty, return it
//   const lastIndex = str.lastIndexOf(' ');
//   console.log('//',lastIndex);
//   if (lastIndex === -1) {
//       return str;
//   }
//   // Recursive case: reverse the substring after the last space and concatenate it
//   return reverseWords(str.substring(lastIndex + 1)) + ' ' + str.substring(0, lastIndex);
// }

// Example usage:
// const originalString = "jishad ali";
// const reversedString = reverseWords(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);


// //waek set 

// function WaekSet(){ 
//    const value = new WeakSet();

// const obj1 = {};
// const obj2 = {};

// value.add(obj1);
// value.add(obj2);

//  return  value.has(obj1)
// }

// // console.log(WaekSet());


// //weak map
// function weakMap(){

// const value = new WeakMap();

// const key1 = {};
// const key2 = {};

// value.set(key1 , "value1");
// value.set(key2 , "value2");

// console.log(value.get(key1))
// value.delete(key1)
// console.log(value.get(key1))
// }


// (function(){
//   console.log("hello world!!!")
// })();

// function* myGenerator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const iterator = myGenerator()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let count=1;
// do{

//   console.log("world" ,count);
//  count ++

// }while(count <= 5 )

// const promise = new Promise((reslve , reject)=>{
//     if (1===1) {
//       reslve("succes")
//     }else{
//       reject("fail")
//     }
// }).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//  console.log(err);
// })


// setImmediate(()=> {
//   console.log("asyncronos");
// })

// console.log("syncrons");




// let arr = [1,2,3]

// let newArr = arr
// newArr.push(4)
// arr.push(5)

// let Arr = JSON.parse(JSON.stringify(arr))

// Arr.push(5)
// console.log(arr)
// // console.log(newArr)
// console.log(Arr)

// const object1  = {
//   firsName : "ananth",
//   lastName :"ezuza",
//   place : 'kochi',
//   discrict : "tndia"
// }

// const object2  = {
//   firsName : "ananth",
//   lastName :"ezuza",
//   place : 'kochi',
//   discrict : "tndia"
// }

// function compare(obj1,obj2){
//   key1=Object.keys(obj1)
//   key2=Object.keys(obj2)

//   if(key1.length!==key2.length){
//     return false
//   }
//   for(let key in obj1){
//     if(obj1[key]!==obj2[key]){
//       return false
//     }
//   }
//   return true
// }
// console.log(compare(object1,object2))



// function compare(obj1 , obj2){
//    key1 = Object.keys(obj1)
//    key2 = Object.keys(obj2)

//    if (key1.length !== key2.length) {
//       return false
//    }

//    for( key in obj1 ){
//        if (obj2[key] !== obj1[key]) {
//         return false
//        }
//    }
//    return true

// }
// console.log(compare(object1, object2));


// let arr2=[1,2,3,1,2,3,4,1]

// for(let i=0 ;i<arr2.length-1 ; i++){
//    for(let j=i+1; j<arr2.length ;j++){
//     if (arr2[i] === arr2[j]) {
//       arr2.splice(j,1)
//       arr2.splice(i,1)
//       i--
//       j--
//     }
//    }
// }

// console.log(arr2);

// let newMap = new Map()

// for(let i=0;i<arr2.length;i++){
//   newMap.set(arr2[i],(newMap.get(arr2[i])||0)+1)
// }
// console.log(newMap)


// newMap.forEach((key,value)=>{
//   if(key==1){
//     console.log(value,'unique')
//   }else{
//     console.log(value,'dupli')

//   }
// })


// // remove elements which start lettter from vowels 
// const arar =['a','e','i']
// const arrrar = ['abhi', 'jishad', "ashna" , 'irfan']

// let count = 0;
// for(let i=0;i<arar.length;i++){
//     for(let j =0;j<arrrar.length ; j++){
//     if (arar[i] === arrrar[j][0]) {
//        console.log(arrrar[j]);
//        count++
//     }
//   }
// }

// console.log(count,"vowels");

//  for(let i=0;i<arar.length ;i++){
//      for( key in  object1){
//         if (arar[i] === object1[key][0]) {
//           delete object1[key]
//         }
//      }
//  }

//  console.log(object1);


// const num = '-+ 89 -[]4232113';


// function extrectNum(num){
//   let str =0;
//   for(let i=0;i<num.length; i++){

//     if (!isNaN(parseInt(num[i]))) {
//        str += num[i]
//     }
//  }
//  return str;
// }

// console.log(extrectNum(num));


// //factory function
// function person(name , age ){
//    return {
//      name:name,
//      age : age,
//      greet:function(){
//        console.log('hello , my name is ' + this.name , "age " , age);
//      }
//    }
// }


// const person1  = person("ananth" , 25)
// const person2  = person("sumi" , 45)


//   person1.greet()
//   person2.greet()

//    let temp = arr2[0]
//    arr2[0] = arr2[arr2.length-1]
//    arr2[arr2.length-1] = temp

//     console.log(arr2);

//     const arr = [1,4,2,5,3]

//    function findSec(arr){
//      let largest = -Infinity
//      let secondLargest = -Infinity
//     for(let i=0;i<arr.length;i++){

//       if (arr[i] > largest ) {
//          secondLargest = largest
//          largest = arr[i] 
//       }else if ( arr[i] > secondLargest && arr[i] < largest ){
//            secondLargest = arr[i];
//       }
//    }

//    return secondLargest
//    }

//    console.log(findSec(arr));

// const promise = new Promise((resolve , reject)=>{
//    setTimeout(()=>{
//     resolve("resolving after 2 sec");
//    },2000)
// })
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// async function myAsyncfun(){
//   try {
//     const  result = await new Promise((resolve , reject) => {
//        setTimeout(()=>{
//         resolve("promise resoleve after 2 sec")
//        },2000)
//     })

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myAsyncfun();

// function random (max){
//   return Math.floor(Math.random() * max)
// }

// console.log(random(20));
// flatten array without using inbuild method 
// let arr = [1, 2, 3, [12, 3, [1, 3, 4, 5]]]

function flatArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res;
}
// console.log(flatArr(arr))

let a = 10; b = 20;
const code = 'console.log(a*b);'

// eval(code)
// get tommoroys date
function getTomorrowsDate() {
  let tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1);
  return tommorow

}
// console.log(getTomorrowsDate());

function sumOfNumber(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;

    sum += digit

    num = Math.floor(num / 10)
  }
  return sum
}

// console.log(sumOfNumber(2362234));

let arra = [13, 63, 6, 2, 66, 6, 6, 13];

function secondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }
   return secondLargest;
}

// console.log(secondLargest(array));
// function removePrime(num){

//     if(num<=1){
//       return false
//     }

//     for(let i=2;i<Math.sqrt(num);i++){
//       if(num%i==0){
//         return false
//       }
//     }
//     return true
// }

// for(let i=0;i<arra.length;i++){
//   console.log(removePrime(arra[i]),arra[i])
//   if(removePrime(arra[i])){
//     arra.splice(i,1)
//   }
// }
// console.log(arra)


//find prime numbers in an array
function isPrime(num) {
  if (num <= 1) {
    return false
  };

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true;
}

let result = arra.filter((num => isPrime(num)))


function countSegment(str) {
  return str.split(' ')

}

let str = "Hello, my name is John"
// console.log(countSegment(str));

// console.log(arra);


function removeDup(arr) {
  return [...new Set(arr)]
}

// console.log(removeDup(arra));
// same elements in an array
function intersection(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.filter(elment => set.has(elment))
}

// remove all dupicate elements

console.log(arra);
function removeAllDup(arr) {

  const duplicate = arr.filter(value => {
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })
  return duplicate;
}

// console.log(removeAllDup(arra));
// removeAllDup(arra)


function generateOtp() {

  let otp = Math.floor(Math.random() * 1000)

  return otp.toString()
}

// console.log(generateOtp());

function filterString(arr) {
  const strings = arr.filter((val) => typeof (val) === 'string')
  return strings
}

// console.log(filterString([1, 'two', 3, 'four', 5, true, 'six', 7]));

const orginalObj = {
  name: 'jishad ali',
  age: '22'
}


function spreadObj(spreadObj) {
  const updateObject = {
    ...spreadObj,
    place: 'malappuram'
  }

  return updateObject
}

// console.log(orginalObj);

// const intervel = setInterval(()=>{
//     console.log("intervell");
// },1000)

// setTimeout(()=>{
//  clearInterval(intervel)
//  console.log("intervell cancelled");
// },3000);

// function nonRepeat(arr) {
//   const unique = [...new Set(arr)];
//   let newArr = [];
//   for (let i = 0; i < unique.length - 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (unique[i] === arr[j]) {
//         newArr.push(arr[i])
//       }
//     }
//   }

//   return newArr

// }

let array = [22, 5, 7, 22, 4, 4]
// console.log(array);
// console.log(nonRepeat(array));


function printCurrentTime() {
  const time = Date()

  return time.toLocaleString();
}


console.log(printCurrentTime());

function findNonrepeating(arr) {
  const res = arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val));
  return res
}
let numbers = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3]

// console.log(findNonrepeating(numbers)); 

function combination(arr) {
  let result = []
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("IIII", arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 8) {
        result.push([arr[i], arr[j]])
        console.log("JJJ", arr[j]);
      }
    }
  }
  return result
}
const num = [4, 5, 6, 3, 2, 6, 4];

// console.log(combination(num));


function mostRepeating(arr) {
  let Maxcount = 0;
  let repeatingElmnt;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (count > Maxcount) {
      Maxcount = count;
      repeatingElmnt = arr[i]
    }
  }

  return repeatingElmnt
}

// console.log(mostRepeating(num));


function* endlessEven() {
  let num = 0;

  while (true) {
    yield num
    num += 1
  }

}

const generate = endlessEven()

// for(let i=0;i<5 ; i++){
//   console.log(generate.next().value);
// }

function longestWord(string) {

  let maxCount = 0;
  let longestWord = '';
  let str = string.split(' ')

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let current = str[i]


    if (current.length > maxCount) {
      maxCount = current.length;
      longestWord = str[i]
    }
  }

  return longestWord

}

const string = "The quick brown fox jumps over the lazy gigantic dog";

console.log(longestWord(string));


function longestSubString(str) {
  let maxCount = 0;
  let word;
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (j !== i && str[i] === str[j]) {
        count++;
      }

      if (count > maxCount) {
        maxCount = count
        word = str[i]
      }
    }
  }
  return word
}

console.log(longestSubString("ggiirrdffdgjjjjssssssss"));


function reverseString(str) {
  if (str.length < 1) {
    return str;
  }

  return reverseString(str.substring(1)) + str[0]
}

console.log(reverseString("jishad ali"));
const arraySum = (arr) => arr.reduce((v, a) => v + a, 0);
console.log(arraySum([1, 2]));

const numbersObject = {
  a: 10,
  b: 20,
  c: 30,
  d: 15
};


function reverseStringStack(str) {
  const charArray = str.split('')
  const stack = []

  for (let char of charArray) {
    stack.push(char)
  }

  for (let i = 0; i < charArray.length; i++) {
    charArray[i] = stack.pop()
  }


  const reverseString = charArray.join('');
  return reverseString
}

// console.log(reverseStringStack('jishadaly'));

function reverseStringRec(str) {
  if (str.length < 1) {
    return str
  }

  return reverseString(str.substring(1)) + str[0]
}

// console.log(reverseStringRec('jishad ali'));


function binarySearch(arr, value) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (arr[middle] === value) {
      return middle
    }

    if (value < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(binarySearch(arr1, 4));

//print even numbers with generate function

function* sampleGen(num) {
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      yield i
    }
  }
}

const iterator = sampleGen(10);
// console.log(iterator.next());

// a function that take multiple argument that tramsformed into a series of functions called carriying..
function carrying(num1) {
  return function a(num2) {
    return function b(num3) {
      return num1 + num2 + num3
    }
  }
}

const sum = carrying(1)(2)(3)
// const  deepCopy  = JSON.parse(JSON.stringify(array))

