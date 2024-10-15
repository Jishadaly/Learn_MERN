// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let numToInsert = arr[i];
//         let j = i - 1

//         while (j >= 0 && arr[j] > numToInsert) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = numToInsert
//     }
//     return arr
// }

// console.log(insertionSort([5, 3, 6, 2, 5, 7, 982, 2]));



// function insertionSort(arr) {

//     for( let i=1 ;i<arr.length;i++){
//         let numToInsert = arr[i];
//         let j = i -1;
//         while(j>=0 && arr[j] > numToInsert){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = numToInsert
//     }

//     return arr
// }

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numberToinsert = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j] > numberToinsert){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = numberToinsert;
//     }
//     return arr
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToinsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToinsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = numberToinsert
    }
    return arr
}

console.log(insertionSort([3, 1, 6, 5, 7, 982, 2]));