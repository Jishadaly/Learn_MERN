class Node {
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoblyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  prepend(value){
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = node
      this.tail  = node
    }else{
       node.next = this.head
       this.head.prev = node;
       this.head = node;
    }
    this.size ++
  }

  append(value){
    const node = new Node(value)


    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    }else{
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size ++
  }

  removeFromFront(){
    if (this.isEmpty()) {
      return console.log("list is empty");
    }

    const value= this.head.value;
    this.head = this.head.next;

    if (this.head !== null) {
      this.head.prev = null
    }else{
      this.tail = null
    }
    this.size --
    return value;
  }

  
  

}

const list  = new DoblyLinkedList()
list.prepend(10)
list.append(60)
list.prepend(40)

console.log(list);