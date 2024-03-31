
function binarySearch (arr , value){
    let leftIndex = 0
    let rightIndex = arr.length -1 ;

    while(leftIndex <= rightIndex){
       let mid = Math.floor((leftIndex + rightIndex)/2)
       
       if (value === arr[mid]) {
          return mid +1
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

function factorial (n){
  if (n===0) {
    return 1
  }else {
    return n *  factorial(n-1)
  }

}

console.log(factorial(5));