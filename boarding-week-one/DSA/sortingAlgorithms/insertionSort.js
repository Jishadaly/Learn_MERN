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


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && numToInsert < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = numToInsert;
    }
    return arr
}

console.log(insertionSort([2, 4, 1, 0, -1, 3]));

