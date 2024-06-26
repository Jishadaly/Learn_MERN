


function linearSearch(arr, value) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
         return i + 1
      }
   }
   return -1
}

// console.log(linearSearch([31,23,321,34,25,3,612,73] , 7));

// function binarySearch(arr ,value){
//    let leftIndex = 0
//    let rightIndex = arr.length - 1

//    while(leftIndex <= rightIndex){

//     let mid = Math.floor((rightIndex + leftIndex)/2)

//     if (value === arr[mid]) {
//       return mid + 1
//     }
//     if (value < arr [mid]) {
//       rightIndex = mid - 1
//     }else{
//       leftIndex = mid +1
//     }
//    }

//    return -1
// }

// console.log(binarySearch([1,2,3,4,5,6,7] , 7)); 


//sort

function bubbleSort(arr) {
   let swaped;

   do {
      swaped = false

      for (let i = 0; i < arr.length - 1; i++) {
         if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
  
            swaped = true
         }
      }
   } while (swaped);

   return arr
}
// console.log(bubbleSort([4,7562,2,32,5623,542]));

function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let min = i
      for (j = i + 1; j < arr.length; j++) {
         if (arr[j] > arr[min]) {
            min = j
         }

         let temp = arr[j]
         arr[j] = arr[min]
         arr[min] = temp
      }
   }
   return arr
}

// console.log(selectionSort([2,52,6,2,24,2]));

function insertionSort(arr) {

   for (let i = 1; i < arr.length; i++) {
      let numto = arr[i]
      let j = i - 1

      while (j >= 0 && arr[j] > numto) {
         arr[j + 1] = arr[j]

         j--
      }
      arr[j + 1] = numto
   }
   return arr
}

// console.log(insertionSort([4,6,2,6,2,5]));

// function quickSort(arr){

//    if (arr.length < 2) {
//        return arr
//    }

//    let pivot = arr[arr.length-1]
//    let right = []
//    let left = []

//    for(let i=0;i<arr.length -1 ;i++){
//       if (arr[i] < pivot) {
//          left.push(arr[i])
//       }else{
//          right.push(arr[i])
//       }
//    }

//    return  [ ...quickSort(left) , pivot , ...quickSort(right) ]

// }
// console.log(quickSort([24,345,44,2,232]));

function mergeSort(arr) {

   if (arr.length < 2) {
      return arr
   }

   let mid = Math.floor(arr.length / 2)
   let leftArr = arr.slice(0, mid)
   let rightArr = arr.slice(mid)

   return merge(mergeSort(leftArr), mergeSort(rightArr))
}

// function merge(leftArr, rightArr) {
//    let sortedArr = []

//    while (leftArr.length && rightArr.length) {
//       if (leftArr[0] < rightArr[0]) {
//          sortedArr.push(leftArr.shift())
//       } else {
//          sortedArr.push(rightArr.shift())
//       }
//    }
//    return [...sortedArr, ...leftArr, ...rightArr]
// }

//  console.log(mergeSort([36,2,6,13,53,322]));



class Node {
   constructor(value) {
      this.value = value
      this.right = null
      this.left = null
   }
}
class binarySearchTree {
   constructor() {
      this.root = null
   }
   isEmpty() {
      return this.root === null
   }

   insert(value) {
      const newNode = new Node(value)
      if (this.isEmpty()) {

         this.root = newNode
      } else {
         this.insertNode(this.root, newNode)
      }
   }

   insertNode(root, newNode) {
      if (newNode.value < root.value) {
         if (root.left === null) {
            root.left = newNode
         } else {
            this.insertNode(root.left, newNode)
         }
      } else {
         if (root.right === null) {
            root.right = newNode
         } else {
            this.insertNode(root.right, newNode)
         }
      }
   }

   inOrder(root) {
      if (root) {
         this.inOrder(root.left)
         console.log(root.value);
         this.inOrder(root.right)
      }
   }
}

// const bst  = new binarySearchTree()

// bst.insert(46)
// bst.insert(3)
// bst.insert(40)
// bst.inOrder(bst.root)


class queue {
   constructor() {
      this.item = []
   }
   isEmpty() {
      return this.item === null
   }

   enqueue(value) {
      this.item.push(value)
   }

   dequeue() {
      this.item.shift()
   }

   peek() {
      if (!this.isEmpty()) {
         return this.item[0]
      }
   }
}


class minHeap {
   constructor() {
      this.heap = []
   }
   getParentIndex(index) {
      return Math.floor((index - 1) / 2)
   }

   getRightIndex(index) {
      return 2 * index + 1;
   }

   getLeftIndex(index) {
      return 2 * index - 1;
   }

   insert(value) {
      this.heap.push(value)
      this.heapfyUp(this.heap.length - 1)

   }
   swap(index1, index2) {
      let temp = this.heap[index1]
      this.heap[index1] = this.heap[index2]
      this.heap[index2] = temp

   }

   heapfyUp(index) {
      const parentIndex = this.getParentIndex(index)
      if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
         this.swap(index, parentIndex)
         this.heapfyUp(parentIndex)
      }
   }

   remove() {
      if (this.heap.length === 0) {
         return null
      }
      if (this.heap.length === 1) {
         return this.heap.pop()
      }

      const min = this.heap[0]
      this.heap[0] = this.heap.pop()
      this.heapfyDown(0);
      return min
   }

   heapfyDown(index) {
      const rightChildIndex = this.getRightIndex(index)
      const leftChildIndex = this.getLeftIndex(index)

      let minIndex = index
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
         minIndex = leftChildIndex
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
         minIndex = rightChildIndex
      }

      if (minIndex !== index) {
         this.swap(index, minIndex)
         this.heapfyDown(minIndex)
      }
   }

   minHeapSort() {
      const sortedArr = []
      while (this.heap.length > 0) {
         sortedArr.push(this.remove())
      }
      return sortedArr
   }
}

// const min = new minHeap()

// min.insert(33)
// min.insert(57)
// min.insert(48)
// min.insert(2)
// min.remove()

// console.log(min.heap);
// console.log(min.minHeapSort());


class HashTable {
   constructor() {
      this.table = []
      this.size = null
   }

   hash(key) {
      let totel;
      for (let i = 0; i < key.length; i++) {
         totel += key.charCodeAt(i);
      }

      return totel % this.size
   }

   set(key, value) {
      const index = this.hash(key)
      let bucket = this.table[index]

      if (!bucket) {
         this.table[index] = [[key, value]]
      } else {
         let sameKeyItem = this.table.find(item => item.key === key)

         if (sameKeyItem) {
            sameKeyItem[1] = value
         } else {
            bucket.push([key, value])
         }
      }
   }

   remove(key) {
      const index = this.hash(key)
      const bucket = this.table[index]

      if (bucket) {
         const sameKeyItem = this.table.find(item => key === item[0])
         if (sameKeyItem) {
            bucket.slice(bucket.indexOf(sameKeyItem), 1)
         }
      }
   }

   display() {
      for (let i = 0; i < this.table.length; i++) {
         if (this.table[i]) {

            console.log(this.table[i]);
         } else {
            return "nnode date"
         }
      }
   }

}


function binarySearch(arr, target) {
   let left = 0
   let right = arr.length - 1

   while (left < right) {
      let mid = Math.floor((left + right) / 2)

      if (target === arr[mid]) {
         return mid
      }

      if (target < mid) {
         right = mid - 1
      } else {
         left = mid + 1
      }
   }

   return -1
}

// console.log(binarySearch(['a','b','c','d'] , 'c'));


function bubbleSort(arr) {
   let swaped;

   do {
      swaped = false

      for (let i = 0; i < arr.length - 1; i++) {
         if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp


            swaped = true
         }
      }
   } while (swaped)

   return arr
}

const arrayToSort = [8, 3, 1, 6, 9, 2, 7, 5, 4];

// console.log(bubbleSort(arrayToSort));


function selectionSort(arr) {
   let min = 0
   for (let i = 0; i < arr.length - 1; i++) {
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[min]) {
            min = j
         }
      }
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
   }

   return arr
}

// console.log(selectionSort(arrayToSort));

function insertionSort(arr) {
   for (let i = 1; i < arr.length - 1; i++) {
      let numToInsert = arr[i]
      let j = i - 1

      while (j >= 0 && arr[j] > numToInsert) {
         arr[j + 1] = arr[j]

         j--
      }

      arr[j + 1] = numToInsert
   }

   return arr
}

// console.log(insertionSort(arrayToSort));


function quickSort(arr) {

   if (arr.length < 2) {
      return arr
   }
   let pivot =arr [arr.length - 1]

   let left = []
   let right = []

  
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i])
      } else {
         right.push(arr[i])
      }
   }

   return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort(arrayToSort));


function mergeSort(arr){
   if (arr.length <2) {
      return arr
   }

   let mid = Math.floor(arr.length/2)
   let leftArr = arr.slice(0,mid)
   let rightArr = arr.slice(mid)

 return merge(mergeSort(leftArr) ,  mergeSort(rightArr))
}

// function merge(leftArr ,rightArr){
//     let sortedArr = []

//      while(leftArr.length && rightArr.length){
//       if (leftArr[0] <= rightArr[0] ) {
//          sortedArr.push(leftArr.shift())
//       }else{
//          sortedArr.push(rightArr.shift())
//       }
//      }

//      return [...sortedArr,...leftArr,...rightArr]
// }

// console.log(mergeSort(arrayToSort));


// const ob = {
//    name: "jishad ali",
//    address: {
//       place: "mampuram",
//       pin: "4563532"
//    }
// }

// console.log(ob.address?.n);


// let name = " my name is jishad"

//  for(let i=0;i<name.length; i++){
     
//       if (name[i] === " ") {
//          name[i+1].toUpperCase()
//       }

      
//  }

//  const string = name.map((str, index) => {
//     if (str === " ") {
//       let newStr = name.indexOf(str)+1
//       name[newStr].toUpperCase()
//     }
//  })

const binarySearch1 =(arr,target)=>{
   let left = 0
   let right = arr.length - 1

   while(left <= right){
      let mid = Math.floor((left + right)/2)
      if (arr[mid] === target) {
         return mid
      }
      if(target < mid){
         right = mid -1
      }else{
         left = mid + 1
      }
   }

   return -1
}

// console.log(binarySearch1([1,2,3,4,5,6],6));

const bubbleSort1 =(arr)=>{
    let swaped;

    do{
         swaped = false;

         for(let i=0;i<arr.length;i++){
             if (arr[i] > arr[i+1]) {
                 let test = arr[i];
                 arr[i] = arr[i+1]
                 arr[i+1] =  test;

                 swaped = true
             }


         }
    }while(swaped)

    return arr
}

// console.log(bubbleSort1([1,4,2,5,1,5]));

const selectionSort1 = (arr)=> {
    let min =0;

    for(let i=0;i<arr.length-1 ;i++){
     min = i
     for(let j=i+1 ; j<arr.length -1 ;j++){
       if (arr[j] < arr[min]) {
         min = j
       }
     }
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }

    return arr 
}

// console.log(selectionSort1([1,4,2,5,1,5]));


const insertionSort1  = (arr)=>{
    for(let i=1;i<arr.length -1; i++ ){
      let numToInsert  =  arr[i]
      let j = i-1

      while(j>=0 && arr[j] > numToInsert){
         arr[j+1] = arr[j]
         
         j--
      }

      arr[j+1] = numToInsert
    }

    return arr
}

// console.log(insertionSort1([1,4,2,5,1,5]));


function bubbleSort(arr){
   let swaped;

   do{
      swaped = false
      for(let i=0;i<arr.length; i++){

          if (arr[i] > arr[i+1]) {

             let temp = arr[i]
             arr[i] = arr[i+1]
             arr[i+1] = temp


             swaped = true
          }
      }

   }while(swaped);


   return arr
}

// console.log(bubbleSort([42,812,327,1,9,56]));


function insertionSort(){

}


function selectionSort(arr){
    let min = 0;

    for(let i=0; i<arr.length ; i++){
      min = i

      for(let j=i+1 ; j<arr.length ; j++){
         if (arr[j] < arr[min]) {
             min = j
         }
      }
       let temp = arr[i]
       arr[i] = arr[min]
       arr[min] = temp
    }

    return arr
}

// console.log(selectionSort([42,812,327,1,9,56]));

function insertionSort(arr){
   for(let i=1;i<arr.length;i++){
      let numToInsert = arr[i];
      let j = i-1

      while(j >= 0 && arr[j] > numToInsert){
         arr[j+1] = arr[j]

         j--

      }

      arr[j+1] = numToInsert
   }
   return arr
}

// console.log(insertionSort([42,812,327,1,9,56]));


function quickSort(arr){

if(arr.length < 2){
   return arr
   }

   let pivot = arr[arr.length -1]
   let left = []
   let right  = []

   for(let i=0;i<arr.length -1; i++){
       if (arr[i] < pivot) {
          left.push(arr[i])
       }else{
         right.push(arr[i])
       }
   }

   return [...quickSort(left) , pivot , ...quickSort(right)]

}

// console.log(quickSort([42,812,327,1,9,56]));


function  mergeSort(arr){
    if (arr.length < 2) {
      return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)


    return merge(mergeSort(left) , mergeSort(right))
}

function merge(left , right){
   let sortedArr = []

   while(left.length && right.length){
       if (left[0] <= right[0]) {
          sortedArr.push(left.shift())
       }else{
         sortedArr.push(right.shift())
       }
   }

   return [...sortedArr , ...left,...right]
}

// console.log(mergeSort([ 1, 9, 42, 56, 327, 812 ]));


class Node {
   constructor(value){
      this.value = value
      this.left = null
      this.right = null
   }
}

class binarySearch {
   constructor(){
      this.root = null
   }

   isEmpty(){
      return this.root === null
   }

   insert(val){
      const node = new Node(val);
      if (this.isEmpty()) {
         this.root = node
      }else{
         this.insertNode( this.root, node);
      }
   }

   insertNode(root , node){
       if (root.value < node.value) {
          if (root.left === null) {
             root.left = node
          }else{
             this.insertNode(root.left  , node)
          } 
       }else{
         if (root.right === null) {
            root.right = node
         }else{
            this.insertNode(root.right , node)
         }
       }
   }

   inOrder(root){
      if (root) {
         this.inOrder(root.left)
         console.log(root.value);
         this.inOrder(root.right)
      }
   }
   preOrder(root){
      if (root) {
         this.preOrder(root.left)
         console.log(root.value);
         this.preOrder(root.right)
      }
   }
   postOrder(root){
      if (root) {
         this.postOrder(root.left)
         console.log(root.value);
         this.postOrder(root.right)
      }
   }
}


class HashTable {
   constructor(size){
      this.table = new Array(size)
      this.size = size
   }

   hash(key){
      let totel = 0;

      for(let i=0 ; i<key.length ; i++){
         totel += key[i];
      }

      return totel
   }

   set(key , value){
       const index = this.hash(key);

       const bucket = this.table[index];
       if (!bucket) {
           this.table = [[key , value] ]
       }else{
         let sameKeyItem = bucket.find((item) => item[0] === key);
         if (sameKeyItem) {
            sameKeyItem[1] = value
         }else{
             bucket.push([key , value]);
         }
       }
   }

   get(key){
      const index = this.hash(key);
      let bucket = this.table[index]

      if (bucket) {
          const sameKeyItem = bucket.find( item => item[0] === key);

          if (sameKeyItem) {
             return sameKeyItem[1]
          }
      }
      return -1
   }

   remove(key){
      const index = this.hash(key);

      let bucket = this.table[index]

      if (bucket) {
         let sameKeyItem = bucket.find(item => item[0] === key)

         if (sameKeyItem) {
             bucket.splice(bucket.indexOf(sameKeyItem),1)
         }
      }
   }


}

class Graph {
   constructor(){
      this.adjecentList = {}
   }

   addVertex(vertex){
      if (!this.adjecentList[vertex]) {
         this.adjecentList[vertex] = new Set()
      }
   }

   addEdges(vertex1 , vertex2){
         if (!this.adjecentList[vertex1]) {
             this.addVertex(vertex1)
         }
         if (!this.adjecentList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjecentList[vertex1].add(vertex2)
        this.adjecentList[vertex2].add(vertex1)
   }

   deleteEdges(vertex1, vertex2){

         this.adjecentList[vertex1].delete(vertex2)
         this.adjecentList[vertex2].delete(vertex1)

   }

   deleteVertex(vertex){
         if (!this.adjecentList[vertex]) {
            return null
         }
         for( let adjecentVertex in this.adjecentList){
             this.deleteEdges(vertex , adjecentVertex)
         }

         delete this.adjecentList[vertex]
   }

   dfs(startIndex , visited = {} ){
      if (!this.adjecentList[startIndex]) {
         return null
      }
      console.log(startIndex);
      visited [startIndex] = true

      for(let neigbor of this.adjecentList[startIndex]){
         if (!visited[neigbor]) {
            this.dfs(neigbor , visited)
         }
      }
   }
}

class Node {
   constructor(){
      this.children = {};
      this.isWordENd = false
   }

   insert(word){
      let curr =  this.root;

      for(let i=0 ; i<word.length ; i++){
         let charTOinsert = word[i]
          if (!curr.children.hasOwnProperty(charTOinsert)) {
             curr.children[charTOinsert] = new Node;
          }

          curr = curr.children[charTOinsert] 
      }
      curr.isWordENd = true
   }

   contains(word){
      let curr = this.root;

      for(let i=0;i<word.length; i++){
          let charTofind = word[i]
          if (!curr.children.hasOwnProperty(charTofind)) {
              return false
          }
          curr  = curr.children[charTofind];
      }
      return curr.isWordENd
   }
   

}