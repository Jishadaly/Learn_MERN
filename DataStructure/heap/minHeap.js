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

