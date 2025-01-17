// // function mergeSort(arr) {
// //   if (arr.length < 2) {
// //     return arr
// //   }

// //   const mid = Math.floor(arr.length / 2)
// //   let leftArr = arr.slice(0, mid)
// //   let rightArr = arr.slice(mid);
// //   return merge(mergeSort(leftArr), mergeSort(rightArr));
// // }

// // function merge(leftArr, rightArr) {
// //   const sortedArr = []

// //   while (leftArr.length && rightArr.length) {
// //     if (leftArr[0] <= rightArr[0]) {
// //       sortedArr.push(leftArr.shift())
// //     } else {
// //       sortedArr.push(rightArr.shift());
// //     }
// //   }

// //   return [...sortedArr, ...leftArr, ...rightArr]
// // }

// function mergeSort(arr){
//   if (arr.length < 2) {
//     return arr
//   }

//   let mid = Math.floor(arr.length / 2)
//   let leftArr  = arr.slice(0,mid)
//   let rightArr = arr.slice(mid);


//   return merge(mergeSort(leftArr) , mergeSort(rightArr))
// }

// function merge(leftArr , rightArr){
//     let sortedArr = []

//     while(leftArr.length && rightArr.length){
//         if (leftArr[0] <= rightArr[0]) {
//           sortedArr.push(leftArr.shift())
//         }else{
//           sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr , ...leftArr , ...rightArr]
// }
// console.log(mergeSort([4, 5, 2, 5, 2, 2])); 
let array = [5,8,2,-1,3,-3]

function mergeSort(arr){
  if(arr.length < 2){
      return arr
  }
  
  let mid = Math.floor(arr.length/2)
  let left = arr.splice(0,mid)
  let right = arr.splice(mid)
  
  return merge(mergeSort(left) , mergeSort(right))
}

function merge(leftArr ,rightArr){
  let sortedArr = []
  
  while(leftArr.length && rightArr.length){
      if(leftArr[0] <= rightArr[0]){
          sortedArr.push(leftArr.shift())
      }else{
          sortedArr.push(rightArr.shift())
      }
  }
  return [...sortedArr , ...leftArr , ...rightArr]
}

console.log(mergeSort(array))