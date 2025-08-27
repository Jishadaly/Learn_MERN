
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