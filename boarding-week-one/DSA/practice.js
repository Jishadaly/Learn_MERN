function binarySearch(arr, target) {
    let leftArr = 0;
    let rightArr = arr.length - 1;

    while (rightArr >= leftArr) {
        let mid = Math.floor((leftArr + rightArr) / 2);

        if (target === arr[mid]) {
            return mid
        }
        if (target < arr[mid]) {
            rightArr = mid - 1
        } else {
            leftArr = mid + 1
        }
    }

    return -1
}

// console.log(binarySearch([10,20,30,40,50],50));

function leanearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }

    return - 1
}

// console.log(leanearSearch([10, 20, 30, 40, 50], 50));

function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]]
                swapped = true
            }
        }
    } while (swapped)

    return arr
}
let unsortedArray = [55, -1, 13, 3, 2, -3, 10]
// console.log(bubbleSort(unsortedArray));


function selectionSort(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {
        min = i

        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        [[arr[i], arr[min]] = [arr[min], arr[i]]]
    }

    return arr
}

// console.log(selectionSort(unsortedArray));

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numTOInsert = arr[i]
        let j = i - 1;

        while (j >= 0 && arr[j] > numTOInsert) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = numTOInsert
    }

    return arr
}

// console.log(insertionSort(unsortedArray))

function quickSort(arr) {

    if (arr.length < 2) {
        return arr
    }

    let leftArr = []
    let rightArr = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

// console.log(quickSort(unsortedArray))

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

// console.log(mergeSort(unsortedArray));

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)

        node.next = this.head;
        this.head = node

        this.size++
    }

    insert(index, value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            console.log('list is empty');
            return
        }
        if (index > this.size && index < this.size) {
            console.log('add valid index');
            return
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            let curr = this.head;

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            
            node.next = curr.next;
            curr.next = node;
        }

        this.size ++;
    }

    print(){
        console.log("start");
        
        let curr = this.head;

        while(curr){
            console.log(curr.value);
            
            curr = curr.next
        }
    }

    reverse(){

        let curr = this.head;
        let prev = null

        while(curr){
            let next = curr.next;

            curr.next = prev
            prev = curr
            curr = next
        }

        this.head = prev
    }

}



const list =  new LinkedList()

// list.prepend(50)
// list.prepend(40)
// list.prepend(60)
// list.insert(2,10)
// list.print();
// console.log('///////////');
// list.reverse();
// list.print();


class MinStack {
    constructor(){
        this.minStack  = []
        this.stack = []
    }

    push(value){
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.getMin()) {
            console.log(value , this.getMin());
            this.minStack.push(value)
        }
    }

    
    pop(){
        const removed = this.stack.pop()

        if (removed === this.getMin()) {
            this.minStack.pop();
        }
    }

    getMin(){
        console.log('length : ',this.minStack.length - 1);
        
        return this.minStack[this.minStack.length - 1 ]
    }
}

const minStack  = new MinStack();


// minStack.push(200)
// minStack.push(40)
// minStack.push(10)
// minStack.push(5)


// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null
//         this.head = null
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }
//     enqueue(value){

//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node;
//             this.front = node;
//         }else{

//         }
//     }
// }

let string1 = 'abc', string2 = 'abcd';

function findTheExtraChar(str1 , str2){

    str1 = str1.split('');

    for( let char of str2 ){
        if (str1.includes(char)) {

        }else{
            return char
        }
    }
    
}

// console.log(findTheExtraChar(string1 , string2));


 function findSecondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0;i<arr.length;i++){
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }

        if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

// console.log(findSecondLargest(unsortedArray));

const currentDate = new Date()
const yestereday = new Date(currentDate)

yestereday.setDate(currentDate.getDate()- 1)
// console.log(yestereday);

const formate = yestereday.toLocaleTimeString().split(' ')[0]
// console.log(formate);


// module.exports   = findSecondLargest;

function expandString(str){
    
}

let stri = 'a2b10c5'
console.log(expandString(stri));

