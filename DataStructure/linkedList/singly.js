class Node {
  constructor(value){
    this.value =  value
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  
  append(value){
    const node = new Node(value)
    
    if (this.isEmpty()) {
       this.head = node
    }else{
      let prev = this.head
      while(prev.next){
         prev = prev.next
      }
      prev.next = node
    }
    this.size ++
  }

  prepend(value){
     const node = new Node(value)

     if (this.isEmpty()) {
       this.head = node
     }else{
      node.next  = this.head
      this.head  = node
     }
     this.size ++
  }

  insert(index , value){
    if (index ===0 || index > this.size) {
      return
    }

    if (index === 0) {
      this.prepend(value)
    }else{
      let prev = this.head
      for(let i=0 ; i<index -1 ;i++){
        prev = prev.next
      }
       node.next = prev.next;
       prev.next = node;
    }
    this.size ++

  }

  removeFrom(index){
    if (index < 0 || index >= this.size) {
      return
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head

      for(let i=0 ; i< index.length -1 ;i++){
        prev = prev.next
      }

       removeNode = prev.next
       prev.next = removeNode.next
    }

    this.size --
    return removeNode.value;
  }

  search(value){
      if (this.isEmpty()) {
        return -1
      }

      let i = 0;
      let curr = this.head 
      while (curr){
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
  }

  print(){
    if (this.isEmpty()) {
       console.log("list is empty");
    }else{
      let prev = this.head
      while(prev){
        console.log(prev.value);
        prev = prev.next
      }
    }

  }

  reverse(){
    let prev = null;
    let curr = this.head;

    while(curr){
      let next = curr.next;

      curr.next = prev;
      prev = curr
      curr = next
    }
    this.head = prev
  }

  
}

const list = new LinkedList()
list.append(10)
list.append(40)
list.append(120)
list.append(140)
list.prepend(3000)
list.print()
console.log("----------------");
list.reverse()
list.print()

