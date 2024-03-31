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

  removeFromEnd(){
    if (this.isEmpty()) {
      return console.log("list is empty ");
    }

    const value = this.tail.value
    this.tail = this.tail.prev
    
    if (this.tail !== null) {
      this.tail.next = null
    }else{
      this.head = null
    }
    this.size --
    return value
  }

  findMid(){
      if (this.isEmpty()) {
        return null
      }else{
        let slow= this.head
        let fast = this.head

        while(fast !== null && fast.next !== null){
          slow = slow.next
          fast = fast.next.next
        }
        return slow.value
      }
  }

  print(){
    if (this.isEmpty()) {
      return console.log("list is empty");
    }else{
      let curr = this.head
      let list = ""
      while(curr){
        console.log(curr.value);
        list += `${curr.value}`
        curr = curr.next
      }
    }
  }
  

}

const list  = new DoblyLinkedList()
list.prepend(10)
list.append(60)
list.prepend(40)
list.print()
console.log("middle value : ",list.findMid());



