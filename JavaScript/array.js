// //array methods

// const concatgination = () => {

//   const arr1 = ["Cecilie", "Lone"];
//   const arr2 = ["Emil", "Tobias", "Linus"];
//   const arr3 = ["Robin", "Morgan"];
//   const myChildren = arr1.concat(arr2, arr3);

//   return myChildren
// }

// // console.log(concatgination());

// const copyArray = () => {
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.copyWithin(2, 0, 2);

//   return fruits
// }


// const flattening = () => {
//   const myArr = [[1, 2], [3, 4], [5, 6]];
//   const newArr = myArr.flat();

//   return newArr
// }


// const spliceArray = () => {
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.splice(0, 2, "new added item");

//   return fruits
// }

// // console.log(spliceArray());


// const sliceArray = () => {
//   const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//   const citrus = fruits.slice();

//   return citrus
// }
// // console.log(sliceArray());


// const indexOfArray = () => {
//   const fruits = ["Apple", "Orange", "Apple", "Mango"];
//   let position = fruits.indexOf("Orange") + 1;

//   return position
// }


// const FindArray = () => {
//   const numbers = [4, 9, 16, 25, 29];
//   let first = numbers.find((value, index, array) =>
//     value > 18);

//   return first
// }
// // console.log(FindArray());


// // The findIndex() method returns the index of the first array element that passes a test function.
// const findIndex = () => {

//   const numbers = [4, 9, 16, 25, 29];
//   let first = numbers.findIndex(myFunction);

//   function myFunction(value, index, array) {
//     return value > 18;
//   }

//   return first
// }
// // console.log(findIndex());


// const findLastIndex = () => {
//   const temp = [27, 28, 30, 40,42, 35, 30];
//   let high = temp.findLast(x => x > 40);

//   return high
// }
// // console.log(findLastIndex());


// const sortArray = () => {
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.sort();

//   return fruits
// }


// const compareFunction_sort = () => {
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.sort

// }


// const findHighestNum = () => {
//   const arr = [1, 2, 3]
//   const max = Math.max(...arr);
//   return max 
// }

// // console.log(findHighestNum());


// const forEachArray = () => {
//   const numbers = [45, 4, 9, 16, 25];
//   let txt = "";
//   numbers.forEach(myFunction);
  
//   function myFunction(value,index , arr){
//       return value 
//  }

//   return numbers
// }

// // console.log(forEachArray());

// const mapAArray = () => {
//   const numbers = [45, 4, 9, 16, 25];
//   let txt = "";
//   numbers.forEach(myFunction);
  
//   function myFunction(value,index , arr){
//       return value * 2
//  }
// }


// const flatMap  = () => {
//   const myArr = [1, 2, 3, 4, 5, 6];
//   const newArr = myArr.flatMap((x) => [x, x * 2]);

//   return newArr
// }

// // console.log(flatMap());


// const arrayentries = () => {
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   const f = fruits.entries()

//    for(let values of f){
//     console.log(values);
//    }

   
// }

// console.log(arrayentries());


// const BooleanCheck = (num1 , num2) =>{
//     return num1 === num2
// }

// // console.log(BooleanCheck(1,1));










let output = 0;
let count = 0;

for (let i = 0; i < nums.length; i++) {
    if (!count || nums[i] > nums[i - 1]) {
        count++;
    } else {
        output = Math.max(output, count);
        count = 1;
    }
}

return Math.max(output, count);