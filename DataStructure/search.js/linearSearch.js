


function linearSearch (arr , value){
   
  for(let i=0 ; i< arr.length ; i++){
    if (arr[i] === value) {
      return i+1
    }
  }
  return -1
}


const arr = [ 10,36,2,4,2,90 ]
console.log();
