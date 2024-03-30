class queue {
  constructor(){
    this.item = []
  }

  enqueue(element){
    this.item.push(element)
  }

  dequeue(){
    this.item.shift()
  }

  isEmpty(){
    return this.item.length === 0
  }

  size(){
    return this.item.length
  }

  peak(){
    if (!this.isEmpty()) {
       return this.item[0]
    }
    return null
  }

  print(){
    console.log(this.item.toLocaleString());
  }
}