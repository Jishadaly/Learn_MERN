const arr = [ 3,-1 ,42, 62];

// function bubbleSort(arr) {
//     let swapped;

//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp
//                 swapped = true
//             }

//         }

//     } while (swapped);

//     return arr
// }

// function bubbleSort(arr){
//     let swapped;

//     do{
//         swapped = false

//         for(let i=0;i<arr.length;i++){
//             if (arr[i] > arr[i+1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;

//                 swapped = true
//             }
//         }
//     }while(swapped)

//     return arr
// }

// function bubbleSort(arr){

//     let swapped ;

//     do{
//          swapped  = false
//          for(let i=0 ; i<arr.length ;i++){
//             if (arr[i] > arr[i+1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp 
//             } 
//          }
//     }while(swapped);

//     return arr
// }

// console.log(bubbleSort(arr));


function swap(arr , i , j){
    [arr[i] , arr[j] ]= [arr[j] , arr[i] ]
}

function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i=0; i<arr.length; i++){
            if(arr[i] > arr[ i+1 ]){
                swap(arr , i, i+1)
                swapped = true
            }
        }
    }while(swapped)
        return arr
}


function bubbleSortTest(arr) {
    let swapped;

    do{
        
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]] ;
                swapped = true
            }
        }

    }while(swapped)

    return arr
}

console.log(bubbleSortTest([74,2,-1,83,2,52]));
