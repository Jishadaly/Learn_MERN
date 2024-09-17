

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        const node  = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
            
        }
        this.size ++
    }

    print(){
        if (this.isEmpty()) {
            return 'the list is empty'
        }
        let curr = this.head;
        for(let i=0;i<this.size ;i++){
            console.log(curr.value);
            curr = curr.next
        }

    }
    append(value){
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

    insert(value , index){
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        if (index === 0 ) {
            this.prepend(node)
        }else{
            let prev = this.head
            for(let i=0;i<index -1 ;i++){
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node;
        }
        this.size ++ 
    }

    remove(index){
        if (index < 0 || index > this.size) {
            console.log("give existing index");
            return
        }
        
        let curr = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        let removedNode = curr.next;
        curr.next = removedNode.next;
        this.size --;
        return removedNode;

    }
    reverse(){
        if (this.isEmpty()) {
            console.log("list is empty");
            return 
        }else{
            let prev = null
            let curr = this.head;
            while(curr){
                let next = curr.next;
                curr.next = prev;
                prev = curr
                curr = next;
            }
        }

        this.head = prev;
    }

};

const list = new LinkedList();
list.append(10)
list.append(11)
list.append(15)
list.insert(22,1)
console.log(list.print());
list.remove(1)
list.print()
