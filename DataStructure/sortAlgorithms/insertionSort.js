// function insertionSort(arr){
//   for(let i=1 ;i<arr.length ; i++){
//     let curr = arr[i]
//     let j = i -1

//     while( j >= 0 && arr[j] > curr){
//         arr[j+1] = arr[j]

//         j--
//     }

//     arr[j+1] = curr
//   }
//   return arr
// }
// console.log(insertionSort([473,3,52,7,26]));



// console.log(0.1+0.2)

// let isVerified = true

// console.log(isVerified+"asdfasdf")

// let obj = {
//   name:'nayana',
//   last:'jishad'
// }


let countVowels=(str)=>{
  let vowels=['a','e','i','o','u']
  let res =''
  for(let i of str.toLowerCase()){
      if(!vowels.includes(i)){
     res+=i
      }
  }
  return res
}

// console.log(countVowels('nayana'))




