
// function binarySearch (arr , value){
//     let leftIndex = 0
//     let rightIndex = arr.length -1 ;

//     while(leftIndex <= rightIndex){
//        let mid = Math.floor(( leftIndex + rightIndex )/2)

//        if (value === arr[mid]) {
//           return mid
//        }

//        if (value < arr[mid]) {
//           rightIndex  = mid - 1
//        }else{
//         leftIndex = mid + 1
//        }
//     }
//     return -1 
// }


// function factorieal(n){
//   if (n===0) {
//     return 1
//   }

//   return n * factorieal(n-1)
// }



function binarySearch(arr, target) {
   let leftIndex = 0
   let rightIndex = arr.length - 1

   while (leftIndex <= rightIndex) {
      let mid = Math.floor((leftIndex + rightIndex) / 2)

      if (arr[mid] === target) {
         return mid
      }

      if (target < arr[mid]) {
         console.log('< ', mid)
         rightIndex = mid - 1
      } else {
         console.log('> ', mid)

         leftIndex = mid + 1
      }
   }

   return -1
}

const arr = [5, 10, 22, 34, 56]
console.log(binarySearch(arr, 56));