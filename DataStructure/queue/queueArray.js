class queue {
  constructor(){
    this.items = []
  }

  enqueue(){
    this.items.push()
  }

  dequeue(){
    this.items.shift()
  }
  peak(){
    if (!this.isEmpty()) {
       return this.items[0]
    }
    return null
  }
  isEmpty(){
    return this.items.length === 0
  }

  print(){
    console.log(this.items.toLocaleString());
  }
  

}

