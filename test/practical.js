// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (target == arr[mid]) {
//             return mid
//         }

//         if (arr[mid] > target) {
//             right = mid + 1
//         } else {
//             left = mid - 1
//         }
//     }

//     return -1

// }
// let array = [34, 75, 23, 60, 7, -3]
// // console.log(binarySearch(array, 60))

// function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) {
//         return -1
//     }
//     let mid = Math.floor((left + right) / 2)
//     if (arr[mid] === target) {
//         return mid
//     }

//     if (arr[mid] > target) {
//         return binarySearchRec(arr, target, left, mid + 1)
//     }

//     return binarySearchRec(arr, target, mid - 1, right)
// }

// // console.log(binarySearchRec(array, 60))

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let numToInsert = arr[i]
//         let j = i - 1

//         while (j >= 0 && arr[j] > numToInsert) {
//             console.log(arr[j]);

//             arr[j + 1] = arr[j]
//             j--
//         }

//         arr[j + 1] = numToInsert
//     }

//     return arr
// }

// // console.log(insertionSort(array))

// function selectionSort(arr) {
//     let min;
//     for (let i = 0; i < arr.length; i++) {
//         min = i
//         for (let j = i + 1; arr.length; j++) {
//             if (arr[j] > arr[min]) {
//                 min = j
//             }
//         }

//         [arr[i], arr[min]] = [arr[min], arr[j]]
//     }

//     return arr
// }
// // console.log(selectionSort(array))

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []


//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] <= pivot) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left ), pivot , ...quickSort(right)]
// }

// // console.log(quickSort(array))


// function mergeSort(arr){
//     if (arr.length < 2) {
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)

//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left) , mergeSort(right))
// }

// function merge(left , right){
//     let sortedArr = []

//     while(left.length && right.length){
//         if (left[0] <= right[0]) {
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }       
//     }

//     return [...sortedArr,...left,...right]
// }

// // console.log(mergeSort(array));



let array = [5,8,2,-1,3,-3]

function bubbleSort(arr){
    let swapped;
    
    do{
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i+1] < arr[i]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
    
   return arr
}

console.log(bubbleSort(array))