const selectionSort = (arr) => {
   let min;
   for(let i=0;i< arr.length -1 ;i++){
    min = i;

    for(let j= i+1 ; j<arr.length ; j++){
        if (arr[j] < arr [min]) {
          min = j
        }
    }
     let temp = arr[j]
     arr[j] = arr[min]
     arr[min] = temp
   }

   return arr
}