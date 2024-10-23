// function leanerSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// function binarySearch(arr) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let mid = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[mid] === target) {
//             return mid
//         }
        
//         if (target <= arr[mid]) {
//             rightIndex = mid - 1
//         } else {
//             leftIndex = mid + 1
//         }
//     }

//     return -1
// }

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middle = Math.floor((rightIndex + leftIndex )/2);

//         if (target === arr[middle]) {
//             return middle
//         }

//         if (target <= arr[middle]) {
//             rightIndex = middle -1
//         }else{
//             leftIndex = middle + 1
//         }
//     }
//     return -1
// }

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let mid = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[mid] === target) {
//             return mid
//         }
//         if (target <= arr[mid]) {
//             rightIndex = mid - 1
//         } else {
//             leftIndex = mid + 1
//         }
//     }

//     return -1
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));


// function binarySearchRecursive(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
//     if (leftIndex > rightIndex) {
//         return -1;
//     }

//     let mid = Math.floor((leftIndex + rightIndex) / 2);

//     if (arr[mid] === target) {
//         return mid + 1
//     }

//     if (target < arr[mid]) {
//         return binarySearchRecursive(arr , target , leftIndex , mid-1)
//     }

//     return binarySearchRecursive(arr, target , mid + 1 , rightIndex)
// }


function binarySearchRecursive(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
    if (leftIndex > rightIndex) {
        return -1
    }

    let mid = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[mid] == target) {
        return mid
    }

    if (target < arr[mid]) {
        binarySearchRecursive(arr, target, leftIndex, mid - 1)

    }

    return binarySearchRecursive(arr, target, mid + 1, rightIndex)
}

// console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 5));

function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length -1 

    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex)/2)

        if (arr[mid] === target) {
            return mid
        }

        if (target < arr[mid]) {
            rightIndex = mid -1
        }else{
            leftIndex = mid + 1
        }
    }

}

// console.log(binarySearch(['a','b','c','d'] ,  'd'));