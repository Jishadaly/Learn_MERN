

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;

//         }
//         this.size++
//     }

//     print() {
//         if (this.isEmpty()) {
//             return 'the list is empty'
//         }
//         let curr = this.head;
//         for (let i = 0; i < this.size; i++) {
//             console.log(curr.value);
//             curr = curr.next
//         }

//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         }
//         if (index === 0) {
//             this.prepend(node)
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }

//             node.next = prev.next
//             prev.next = node;
//         }
//         this.size++
//     }

//     remove(index) {
//         if (index < 0 || index > this.size) {
//             console.log("give existing index");
//             return
//         }

//         let curr = this.head;
//         for (let i = 0; i < index - 1; i++) {
//             prev = prev.next
//         }
//         let removedNode = curr.next;
//         curr.next = removedNode.next;
//         this.size--;
//         return removedNode;

//     }
//     reverse() {
//         if (this.isEmpty()) {
//             console.log("list is empty");
//             return 
//         } else {
//             let prev = null
//             let curr = this.head;
//             while (curr) {
//                 let next = curr.next;
//                 curr.next = prev;
//                 prev = curr
//                 curr = next;
//             }
//         }

//         this.head = prev;
//     }

//     recursiveReverse( curr = this.head  , prev = null){
//         if (curr === null) {
//             this.head = prev
//             return
//         }

//         let next = curr.next;
//         curr.next = prev

//         this.recursiveReverse(next , curr)
//     }

// };

// const list = new LinkedList();
// list.append(10)
// list.append(11)
// list.append(15)
// list.insert(22, 1)
// list.remove(1)
// list.print()
// list.recursiveReverse();
// list.print()

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         const node = new Node(value);

//         if(this.isEmpty()) {
//             this.head = node
//         }else{

//             node.next = this.head;
//             this.head = node
//         }
//         this.size ++
//     }

//     append(value){
//         const node = new Node(value)

//         if(this.isEmpty()) {
//             this.head = node
//         }else{
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }

//             curr.next = node
//         }
//         this.size++
//     }

//     reverse(){
//         if (this.isEmpty()) {
//             console.log("list is empty");
//         }

//         let curr = this.head
//         let prev = null;

//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     reverseRec(curr = this.head ,  prev = null ){
//         if (curr == null) {
//             this.head = prev
//             return
//         }

//         let next = curr.next
//         curr.next = prev

//         this.reverseRec(next , curr)
//     }



//     print(){
//         if (this.isEmpty()) {
//             console.log("list is empty");
//             return
//         }

//         let curr = this.head;
//         while( curr ){
//             console.log(curr.value);
//             curr = curr.next
//         }
//     }

//     remove(index){
//         if (this.isEmpty()) {
//             console.log("list is empty");
//             return
//         }
//         if (index < this.size && index > this.size) {
//             console.log("enter a valid index");
//             return
//         }

//         let removedNode;
//         let curr  = this.head;
//         for(let i=0;i<index-1;i++){
//              curr = curr.next
//         }
//          removedNode = curr.next;
//          curr.next  = removedNode.next;
//          return removedNode;
//     }

// }

// const list = new LinkedList();

// list.prepend(20);
// list.append(39)
// list.append(29)
// list.append(19)
// // list.reverseRec()
// // list.remove(1)
// list.print()

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null

//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     isempty() {
//         return this.size === 0
//     }

//     prepent(value) {
//         const node = new Node(value)
//         if (this.isempty()) {
//             console.log(node);

//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node;
//         }

//         this.size++;
//     }

//     print() {

//         if (this.isempty()) {
//             console.log('list is empty');
//         } else {
//             let curr = this.head;
//             while (curr) {
//                 console.log(curr.value);
//                 curr = curr.next;
//             }
//         }

//     }

//     removeEvenNum(){
//         if ( this.isempty() ) {
//             console.log('hey is jishad ');
//         }

//         let curr = this.head;
         
//     }


//     reverse() {
//         if (this.isempty()) {
//             console.log("list is empy");
//         } else {
//             let curr = this.head
//             let prev;
//             while (curr) {
//                 let next = curr.next
//                 curr.next = prev;
//                 prev = curr;
//                 curr = next
//             }
//             this.head = prev;
//         }
//     }


//     reverseRec(curr = this.head, prev = null) {

//         if (curr == null) {
//             this.head = prev
//             return
//         }

//         let next = curr.next;
//         curr.next = prev;

//         this.reverseRec(next, curr);
//     }

// }

// const list = new LinkedList();

// list.prepent(20);
// list.prepent(30);
// list.reverseRec();
// list.print();

class Node{

    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    appent(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let curr = this.head;

            while(curr.next){
                curr = curr.next 
            }
            curr.next = node
        }
        this.size ++
    }

    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size ++ 
    }

    reverse(){
        
        if (this.isEmpty()) {
         console.log('empty');
        }else{
            let curr = this.head;
            let prev  = null

            while(curr){
                let next = curr.next

                curr.next = prev
                prev =  curr
                curr = next
            }

            this.head = prev
        }
    }

    reverseRec(curr = this.head , prev = null){
        if (curr == null) {
            this.head = prev
            return
        }

        let next = curr.next;

        curr.next = prev;
        this.reverseRec(next , curr)
    }

    print(){
        if (this.isEmpty()) {
            console.log('empty');
            return     
        }

        let curr =  this.head;
        while(curr){
            console.log(curr.value);
            
            curr = curr.next;
        }
    }
}
const list = new LinkedList();

list.appent(37);
list.appent(47);
list.appent(374);
list.appent(22);
list.prepend(3);
list.reverseRec();
list.print();