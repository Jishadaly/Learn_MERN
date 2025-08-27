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



// class minHeap {
//   constructor() {
//     this.heap = []
//   }

//   getParentIndex(index) {
//     return Math.floor((index - 1) / 2)
//   }

//   getLeftChild(index) {
//     return 2 * index + 1
//   }

//   getrightChild(index) {
//     return 2 * index + 2
//   }

//   insert(val) {
//     this.heap.push(val)
//     this.heapfyUp(this.heap.length - 1)
//   }

//   heapfyUp(index) {
//     const paranetIndex = this.getParentIndex(index)

//     if (paranetIndex >= 0 && this.heap[paranetIndex] > this.heap[index]) {
//       this.swap(paranetIndex, index);
//       this.heapfyUp(paranetIndex)
//     }
//   }

//   swap(index1, index2) {
//     let temp = this.heap[index1]
//     this.heap[index1] = this.heap[index2]
//     this.heap[index2] = temp
//   }

//   remove() {
//     if (this.heap.length === 0) {
//       return null
//     }
//     if (this.heap.length === 1) {
//       this.heap.pop()
//     }

//     let min = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.heapfyDown(0)

//     return min
//   }

//   heapfyDown(index) {
//     const leftachildIndex = this.getLeftChild(index)
//     const rightChildIndex = this.getrightChild(index)

//     let minIndex = index;

//     if (leftachildIndex < this.heap.length && this.heap[leftachildIndex] < this.heap[minIndex]) {
//       minIndex = leftachildIndex
//     }
//     if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
//       minIndex = rightChildIndex
//     }

//     if (minIndex !== index) {
//       console.log(this.heap[minIndex]);

//       this.swap(minIndex, index)

//       this.heapfyDown(minIndex)
//     }
//   }

//   heapSort() {
//     let sortedArr = []

//     while (this.heap.length > 0) {
//       sortedArr.push(this.remove())
//     }
//     return sortedArr;
//   }
// }

class MinHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }

  insert(value) {
    this.heap.push(value)
    if (this.heap.length > 1) {
      this.heapifyUp(this.heap.length - 1)
    }
  }

  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);

    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex)
      this.heapifyUp(parentIndex)
    }
  }

  remove() {
    if (this.heap.length <= 1) {

      return this.heap.pop()
    } else {
      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0)

      return min;
    }
  }

  heapifyDown(index) {
    let leftChildIndex = this.getLeftChildIndex(index)
    let rightChildIndex = this.getRightChildIndex(index)

    let minIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
      minIndex = leftChildIndex
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
      minIndex = rightChildIndex
    }

    if (minIndex !== index) {
      this.swap(index, minIndex)
      this.heapifyDown(minIndex)
    }

  }

  swap(index1, index2) {
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  heapSort() {
    let sortArr = []

    while (this.heap.length > 0) {
      sortArr.push(this.remove())
    }

    return sortArr
  }

  findKthMinElm(k) {
    if (k > this.heap.length) {
      return null
    }
    let kthElm;
    for (let i = 0; i < k; i++) {
      kthElm = this.remove();
    }

    return kthElm
  }


}

const minHeap = new MinHeap()

minHeap.insert(40)
minHeap.insert(20)
minHeap.insert(10)
minHeap.insert(30)
minHeap.insert(50)
minHeap.insert(60)


console.log('min : ', minHeap.heap)
// minHeap.remove();
// console.log('min : ', minHeap.heap)
// console.log(minHeap.heapSort())
console.log(minHeap.findKthMinElm(4))


class PriorityQueue {
  constructor() {
    this.heap = []
  }

  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }
  getLeftChildIndex(paranetIndex) { return 2 * paranetIndex + 1 }
  getRightChildIndex(paranetIndex) { return 2 * paranetIndex + 2 }
  swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] }

  enqueue(value, priority) {
    const node = { value, priority }
    this.heap.push(node)
    this.heapifyUp(this.heap.length - 1)
  }

  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[index].priority > this.heap[parentIndex].priority) {
      this.swap(index, parentIndex);
      index = parentIndex
      parentIndex = this.getParentIndex(index);
    }
  }

  dequeue() {
    if (this.heap.lenght < 1) {
      return this.heap.pop();
    }
    let item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return item.value
  }

  heapifyDown(index) {
    let leftChildIndex = this.getLeftChildIndex(index)
    let rightChildIndex = this.getRightChildIndex(index)

    let maxIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[maxIndex].priority > this.heap[index].priority) {
      maxIndex = leftChildIndex
    }

    if (rightChildIndex > this.heap.length && this.heap[maxIndex].priority > this.heap[index].priority) {
      maxIndex = index
    }

    if (maxIndex !== index) {
      this.swap(maxIndex, index)
      this.heapifyDown(maxIndex)
    }
  }

}

const pq = new PriorityQueue()
pq.enqueue('jishad', 2)
pq.enqueue('safiya', 10)
pq.enqueue('afsal', 5)

console.log(pq.heap);
console.log(pq.dequeue())