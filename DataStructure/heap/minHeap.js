// class minHeap {
//   constructor(){
//     this.heap = []
//   }

//   getParanetIndex(index) {
//     return Math.floor((index - 1)/2)
//   }

//   getLeftachildIndex(index){
//      return 2 * index + 1 
//   }

//   getRightChildIndex(){
//     return 2 * index + 2
//   }

//   swap(index1 , index2){
//      const temp = this.heap[index1]
//      this.heap[index1] = this.heap[index2]
//      this.heap[index2] = temp
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapfyUp(this.heap.length - 1)
//   }

//   heapfyUp(index){
//      const parentIndex = this.getParanetIndex(index)
//      if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
//         this.swap(parentIndex , index)

//         this.heapfyUp(parentIndex)
//      }
//   }

//   remove(){
//     if (this.heap.length === 0) {
//       return null
//     }

//     if (this.heap.length === 1) {
//       return this.heap.pop()
//     }

//     const min = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.heapfyUp(0)

//     return min

//   }

//   heapfyDown(index){
//     const leftachildIndex = this.getLeftachildIndexi(index)
//     const rightChildIndex =  this.getRightChildIndex(index)

//     const minIndex = index

//     if(leftachildIndex < this.heap.length && this.heap[leftachildIndex] < this.heap[minIndex]){
//       minIndex = leftachildIndex
//     }

//     if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
//       minIndex = rightChildIndex
//     }

//     if (minIndex !== index) {
//       this.swap(index , minIndex)
//       this.heapfyDown(minIndex)
//     }
//   }

//   minHeapSort(){
//     const sortedArr =  []
  
//     while(this.heap.length > 0){
//       sortedArr.push(this.remove())
//     }
  
//     return sortedArr;
//   }
  
// }

// const min = new minHeap()
// min.insert(28)
// min.insert(281123)
// min.insert(281)
// min.insert(223)
// min.remove()

// console.log(min.heap);



class minHeap{
  constructor(){
    this.heap = []
  }

  getParentIndex (index){
    return Math.floor((index-1)/2)
  }

  getLeftChild(index){
    return 2 * index + 1
  }

  getrightChild(index){
    return 2 * index + 2
  }

  insert(val){
    this.heap.push(val)
    this.heapfyUp(this.heap.length - 1 )
  }

  heapfyUp(index){
    const paranetIndex = this.getParentIndex(index)

    if (paranetIndex >= 0 && this.heap[paranetIndex] > this.heap[index]) {
      this.swap(paranetIndex , index);
      this.heapfyUp(paranetIndex)
    }
  }

  swap(index1 , index2){
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  remove(){
     if (this.heap.length === 0) {
      return null
     }
     if (this.heap.length === 1) {
         this.heap.pop()
     } 

     let min = this.heap[0]
     this.heap[0] = this.heap.pop()
     this.heapfyDown(0)

     return min
  }

  heapfyDown(index){
     const leftachildIndex = this.getLeftChild(index)
     const rightChildIndex = this.getrightChild(index)

      let minIndex = index;

      if (leftachildIndex < this.heap.length && this.heap[leftachildIndex] < this.heap[minIndex]) {
        minIndex = leftachildIndex
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
         minIndex = rightChildIndex
      }

      if (minIndex !== index) {
        console.log(this.heap[minIndex]);
        
        this.swap(minIndex , index)

        this.heapfyDown(minIndex)
      }
  }

  heapSort(){
     let sortedArr = []

     while(this.heap.length > 0){
       sortedArr.push(this.remove())
     }
     return sortedArr;
  }
}