// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// function quickSort(arr){
//     if (arr.length <2 ) {
//         return arr
//     }
//     let pivot = arr[arr.length -1 ];
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([2, 1, 5, 2, 10]));

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let pivot = arr[arr.length - 1];
//     let left = []
//     let right = []

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...left, pivot, ...right]
// }

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let pivot = arr[arr.length - 1];
//     let right = [];
//     let left = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// function quickSort(arr){
//     if (arr.length < 2) {
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = [];
//     let right = [];

//     for(let i=0;i<arr.length-1;i++){
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot , ...quickSort(right)]

// }

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let left = []
//     let right = []
//     let pivot = arr[arr.length - 1];

//     for (let i = 0; i < arr.length -1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }


function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let left = []
    let right = []

    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log(quickSort([2, 1, 5, 2, 10]));