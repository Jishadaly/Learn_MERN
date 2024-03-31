class minHeap {
  constructor(){
    this.heap = []
  }

  getParanetIndex(index) {
    return Math.floor((index - 1)/2)
  }

  getLeftachildIndex(index){
     return 2 * index + 1 
  }

  getRightChildIndex(){
    return 2 * index + 2
  }

  swap(index1 , index2){
     const temp = this.heap[index1]
     this.heap[index1] = this.heap[index2]
     this.heap[index2] = temp
  }

  insert(value){
    this.heap.push(value)
    this.heapfyUp(this.heap.length - 1)
  }

  heapfyUp(index){
     const parentIndex = this.getParanetIndex(index)
     if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex , index)

        this.heapfyUp(parentIndex)
     }
  }
  

}