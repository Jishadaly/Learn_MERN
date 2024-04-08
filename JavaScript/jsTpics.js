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

// const keys = Object.entries(obj)
// console.log(keys);

// const numbers = [1, 2, 3, 4, 5];

// const double =  numbers.filter( num=>  num % 2 === 0 )
// console.log(double);



// const dupArry = [...numbers , ...double]
// console.log(dupArry);


// function outerFunction(){
//   const outerVariable = 'iam from the order function'

//   function innerFunction(){
//      console.log(outerVariable);
//   }

// return innerFunction
// }

// const innerFunction = outerFunction();

// innerFunction()

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

function restParmas(...args){
   console.log(args);
   let totel = 0;
   for(const x of args){
      totel += x;
   }

   return totel
}

console.log(restParmas(2,4,2,4,2,4));


function spread(a,b,c,obj){
  let result  =a.concat(b)

  return result
} const obj ={
  hello : "hey"
}

let a = [1,2,34,5,6] ; b = [4,5,2,5,2,4] ; c = [23,43,2,5]
console.log(spread(a,b,c,obj));

function reverseString(str){
  if (str.length  < 2) {
    return str
  }


  return reverseString(str.substring(1)) + str.charAt(0);
}


function reverseWords(str) {
  // Base case: if the string has no space or is empty, return it
  const lastIndex = str.lastIndexOf(' ');
  console.log('//',lastIndex);
  if (lastIndex === -1) {
      return str;
  }
  // Recursive case: reverse the substring after the last space and concatenate it
  return reverseWords(str.substring(lastIndex + 1)) + ' ' + str.substring(0, lastIndex);
}

// Example usage:
const originalString = "jishad ali";
const reversedString = reverseWords(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);