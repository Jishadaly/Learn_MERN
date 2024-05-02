
function binarySearch (arr , value){
    let leftIndex = 0
    let rightIndex = arr.length -1 ;

    while(leftIndex <= rightIndex){
       let mid = Math.floor(( leftIndex + rightIndex )/2)
       
       if (value === arr[mid]) {
          return i +1
       }

       if (value < arr[mid]) {
          rightIndex  = mid - 1
       }else{
        leftIndex = mid + 1
       }
    }
    return -1 
}


const arr = [ 10,36,2,4,2,90 ]
console.log(binarySearch(arr , 2));

// function factorieal(n){
//   if (n===0) {
//     return 1
//   }

//   return n * factorieal(n-1)
// }