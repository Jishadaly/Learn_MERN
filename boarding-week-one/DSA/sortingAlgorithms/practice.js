const  array = [6, 7, -1, 2, 9, 3, 5]

function SelectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]]
    }

    return arr
}

// console.log(SelectionSort(array));

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToInsert = arr[i];
        let j = i-1
        while(j>=0 && arr[i] > numToInsert ){
            arr[j] = arr[j+1]
            j--
        }
        arr[i+1] = numToInsert;

    }

    return arr;
}

// console.log(insertionSort(array))


function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let left = []
    let right = []
    let pivot = arr[arr.length-1]

    for( let i=0;i<arr.length-1;i++ ){
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left) , pivot , ...quickSort(right)]
}

// console.log(quickSort(array))

function mergeSort(arr){
    if (arr.length < 2 ) {
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArr =  arr.slice(0,mid)
    let rightArr = arr.slice(mid)


    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left , right){
    let sortedArr = []
    while(left.length && right.length){
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr , ...left , ...right]
}

const nweArr = mergeSort(array)

function binarySearch(arr , target){
    
    let left = 0;
    let right = arr.length - 1

    while (left <= right ){
        let mid =  Math.floor(left + right / 2 )
        if (arr[mid] === target) {
            return mid
        }
         else if ( arr[mid] < target){
             left = mid - 1
         }else{
            right = mid + 1
         }
    }

    return -1
}

console.log(binarySearch(nweArr , 2))

