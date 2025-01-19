
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    appent(val) {
        const node = new Node(val)

        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }

        this.size++
    }

    revers() {
        let curr = this.head;
        let prev = null

        while (curr) {
            let next = curr.next;

            curr.next = prev
            prev = curr
            curr = next
        }

        this.head = prev;
    }

    removedup() {

        if(!this.head) return null
        
        let curr = this.head

        while(curr.next){
            let runner = curr
            while(runner.next){
                if(runner.next.value === curr.value ){
                    runner.next = runner.next.next
                }else{
                    runner = runner.next
                }
            }
            curr = curr.next
        }
        


        
    }

    print() {
        let curr = this.head;

        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
}

const list = new LinkedList();

list.appent(37);
list.appent(47);
list.appent(374);
list.appent(22);
list.appent(47);
// list.appent(374);
// console.log('after removel');
// list.revers()
list.print();
list.removedup()

console.log('.........................');

list.print();

removedup(){
           
    const set = new Set()
    
    // while(this.head && set.has(this.head.value)){
    //     console.log('fffffff')
    //     this.head = this.head.next
    //     this.size --
    // }
    
    set.add(this.head.value)
    
    let curr = this.head
    
    while(curr.next){
        if(set.has(curr.next.value)){
            curr.next = curr.next.next
            this.size --
        }else{
            set.add(curr.next.value)
            curr = curr.next;
        }
    }
}

reverse() {
    let curr = this.head
    let prev = null

    while (curr) {
        let next = curr.next

        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}

reverseRec(curr = this.head, prev = null) {
    if (curr === null) {
        this.head = prev
        return
    }

    let next = curr.next
    curr.next = prev

    this.reverseRec(next, curr)
}

print() {
    let curr = this.head
    while (curr) {
        console.log(curr.value);
        curr = curr.next
    }
}