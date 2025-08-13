// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty() {
//     return this.size === 0
//   }

//   append(value) {
//     const node = new Node(value)

//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       let prev = this.head
//       while (prev.next) {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }

//   prepend(value) {
//     const node = new Node(value)

//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   insert(index, value) {
//     if (index === 0 || index > this.size) {
//       return
//     }

//     if (index === 0) {
//       this.prepend(value)
//     } else {
//       let prev = this.head
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next
//       }
//       node.next = prev.next;
//       prev.next = node;
//     }
//     this.size++

//   }

//   removeFrom(index) {
//     if (index < 0 || index >= this.size) {
//       return
//     }
//     let removeNode;
//     if (index === 0) {
//       removeNode = this.head
//       this.head = this.head.next
//     } else {
//       let prev = this.head

//       for (let i = 0; i < index.length - 1; i++) {
//         prev = prev.next
//       }

//       removeNode = prev.next
//       prev.next = removeNode.next
//     }

//     this.size--
//     return removeNode.value;
//   }

//   search(value) {
//     if (this.isEmpty()) {
//       return -1
//     }

//     let i = 0;
//     let curr = this.head
//     while (curr) {
//       if (curr.value === value) {
//         return i;
//       }
//       curr = curr.next;
//       i++;
//     }
//     return -1;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let prev = this.head
//       while (prev) {
//         console.log(prev.value);
//         prev = prev.next
//       }
//     }

//   }

//   reverse() {
//     let prev = null;
//     let curr = this.head;

//     while (curr) {
//       let next = curr.next;

//       curr.next = prev;
//       prev = curr
//       curr = next
//     }
//     this.head = prev
//   }


// }

// const list = new LinkedList()
// list.append(10)
// list.append(40)
// list.append(120)
// list.append(140)
// list.prepend(3000)
// list.print()
// console.log("----------------");
// list.reverse()
// list.print()

// class Node {
//   constructor(value){
//      this.value = value
//      this.next = null
//   }
// }

// class LinkedList {
//   constructor(){
//      this.head = null
//      this.size = 0
//   }

//   isEmpty(){
//      return this.size === 0
//   }

//   append(value){
//      const node = new Node(value)
//      if (this.isEmpty()) {
//         this.head = node
//      }else{
//         let prev = this.head

//         while(prev.next){
//            prev = prev.next
//         }
//         prev.next = node
//         node.next = null
//      }
//      this.size ++
//   }


//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     }else{
//       node.next = this.head
//       this.head = node           
//     }
//   }


//   print(){
//     if (this.isEmpty()) {
//       console.log("eptyyyy");
//     }else{
//       let curr = this.head
//       while(curr){
//         console.log(curr.value); 
//         curr = curr.next       
//       }

//     }
//   }

//   reveres(){
//     let prev = null;
//         let curr = this.head;

//         while (curr) {

//           let next = curr.next;
//           curr.next = prev;    
//           prev = curr          
//           curr = next           
//         }

//         this.head = prev 
//   }


// }



// const list = new LinkedList()

// list.append(50)
// list.append(60)
// list.append(70)
// list.prepend(333)
// list.print()
// console.log(list);



// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }

//   isEmpty(){
//     return this.size === 0
//   }

//   append(value){
//     const node = new Node(value)

//     if (this.isEmpty()) {
//       this.head = node
//     }else{
//       let curr = this.head;
//       while(curr.next){
//         curr = curr.next
//       }
//       curr.next = node
//     }
//     this.size ++
//   }

//   prepend(value){
//       const node = new Node(value)
//       if (this.isEmpty()) {
//          this.head === node
//       }else{
//          node.next = this.head
//          this.head = node
//       }
//       this.size ++
//   }

//   print(){
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     }else{

//       while(curr.next){
//          console.log(curr.value);
//          curr = curr.next
//       }
//     }
//   }

//   reverse(){
//     if (this.isEmpty() || !this.head.next ) {
//       return;
//     }

//     let prev = null;
//     let curr = this.head;
//     let next = null;


//     while(curr){
//       next = curr.next;
//       curr.next = prev
//       prev = curr
//       curr = next
//     }

//     this.head = prev;
//   }

// }


// const list =  new LinkedList()

// list.append('h')
// list.append('e')
// list.append('l')
// list.append('l')
// list.append('0')

// list.reverse()

// list.print()


// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null
//     this.size = 0
//   }

//   isEmpty() {
//     return this.size === 0
//   }

//   prepend(value) {
//     const node = new Node(value)

//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   append(value) {
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next
//       }
//       curr.next = node
//     }
//     this.size ++
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log('empty');
//     } else {
//       let curr = this.head;
//       while (curr) {
//         console.log(curr.value);
//         curr = curr.next
//       }
//     }
//   }

//   reverse(){
//     if (this.isEmpty()) {
//        return
//     }
//   let curr = this.head;
//   let prev = null

//   while(curr){

//      let next = curr.next;
//      curr.next = prev
//      prev = curr
//      curr = next;

//    }
//     this.head = prev;
//   }
// }

// const list = new LinkedList()

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.prepend(5);
// list.prepend(0.5);
// list.reverse();
// list.print();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  prepend(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      newNode.next = curr
      this.head = newNode
    }
    this.size++
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let curr = this.head;

      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode
    }
    this.size++
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("list is empty")
      return;
    } else {
      let curr = this.head;
      let prev = null

      while (curr) {
        let next = curr.next;

        curr.next = prev
        prev = curr
        curr = next
      }

      this.head = prev
    }
  }

  removeMid() {
    if (this.isEmpty()) {
      return null
    }

    let mid = Math.floor(this.size / 2)
    console.log(this.size, " size ","mid value ",mid)
    let curr = this.head;
    for (let i = 0; i < mid-1; i++) {
      curr = curr.next;
    }
    let removedNode = curr.next;
    curr.next = removedNode.next;
    return removedNode;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const list = new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.append(4)
list.append(5)
list.reverse()
console.log('before remove')
list.print()

console.log('removed value :', list.removeMid())

console.log('after removal :')
list.print()