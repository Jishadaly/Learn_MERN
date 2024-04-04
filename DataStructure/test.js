


function linearSearch(arr , value){
   for(let i =0 ;i<arr.length ;i++){
      if (arr[i] === value) {
          return i+1
      }
   }
   return -1
}

// console.log(linearSearch([31,23,321,34,25,3,612,73] , 7));

function binarySearch(arr ,value){
   let leftIndex = 0
   let rightIndex = arr.length - 1

   while(leftIndex <= rightIndex){

    let mid = Math.floor((rightIndex + leftIndex)/2)

    if (value === arr[mid]) {
      return mid + 1
    }
    if (value < arr [mid]) {
      rightIndex = mid - 1
    }else{
      leftIndex = mid +1
    }
   }

   return -1
}

// console.log(binarySearch([1,2,3,4,5,6,7] , 7)); 


//sort

// function bubbleSort(arr){
//   let swaped;

//   do {
//       swaped  = false

//       for(let i=0 ; i<arr.length- 1  ; i++){
//         if (arr[i] > arr[i+1]) {
//            let temp = arr[i]
//            arr[i]  =  arr[i+1]
//            arr[i+1] = temp

//            swaped = true
//         }
//       }
//   }while(swaped);

//   return arr
// }
// console.log(bubbleSort([4,7562,2,32,5623,542]));

function selectionSort(arr){
   for(let i=0;i<arr.length ; i++){
      let min = i
      for(j =i+1 ; j<arr.length; j++){
         if(arr[j] < arr[min]){
            min = j
         }

         let temp = arr[j]
         arr[j]= arr[min]
         arr[min] = temp
      }
   }
   return arr
}

console.log(selectionSort([2,52,6,2,24,2]));