// function selectionSort(arr) {
//     let n = arr.length;
//     let min;

//     for (let i = 0; i < n - 1; i++) {
//         min = i
//         for (let j = i + 1; j < n ; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }

//         let temp = arr[i];
//         arr[i] = arr[min]
//         arr[min] = temp;
//     }

//     return arr
// }
let arr = [43, 34, -1, 453, -3]

// function selectionSort(arr){
//     let min;
//     for(let i=0;i<arr.length;i++){
//         min = i

//         for(let j=i+1 ; j<arr.length ;j++){
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }

//         let temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp;

//     }

//     return arr

// }

// function selectionSort(arr) {
//     let min;

//     for (let i = 0; i < arr.length; i++) {
//         min = i
//         for (let j = i + 1; j < arr.length ; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         };

//         let temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp
//     }

//     return arr
// }

// function selectionSort(arr){
//     let min;

//     for(let i=0;i<arr.length;i++){
//         min = i
//         for(j= i+1 ;j<arr.length;j++){
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[min]
//         arr[min] = temp;
//     }

//     return arr
// }

function selectionSort(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = j
            }
        }

        [arr[i] , arr[min]] = [arr[min] , arr[i]]
    }
    
    return arr
}


