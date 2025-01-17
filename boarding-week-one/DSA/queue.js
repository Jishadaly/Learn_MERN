// class Queue {
//     constructor(){
//         this.items = []
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         if (this.isEmpty()) {
//             return "queue is empty"
//         }

//        return this.items.shift()
//     }
// }


// class queue{
//   constructor(){
//     this.items = []
//  }

//  enqueue(value){
//     this.items.push = value
//  }

//  dequeue(value){
//     this.items.shift();
//  }
 
// }


class Node {
   constructor(value){
      this.head = value;
      this.next = null
   }

   
}

class Queue {
   constructor(){
      this.front = null
      this.rear = null
      this.size = null
   }

   isEmpty() {
      return this.size === 0;
  }

   enqueue(value){
      const newNode = new Node(value)
      if (this.isEmpty()) {
         this.front = newNode
         this.rear = newNode
      }else{
         this.rear.next = newNode;
         this.rear = newNode
      }

      this.size ++
   }

   dequeue(){
      if (this.isEmpty()) {
         return null
      }

      let removedItem = this.front();
      this.front = this.front.next;

      if (!this.front) {
         this.rear = null
      }

      this.size --
   }
}