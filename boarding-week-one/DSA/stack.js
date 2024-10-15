// class Stack {
//     constructor() {
//         this.items = [];
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     push(value) {
//         this.items.push(value);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return 'stack is empty'
//         }
//         const result = this.items.pop();
//         return result;
//     }
// }


class Stack {
    constructor() {
        this.items = []
        this.size = 0;
    }

    push(value) { 
        this.items.push(value)

    }

    pop(value) {
        if (this.items.length === 0) {
            console.log('stack underflow');
            return
        }
        this.items.pop(value)
    }

    removeMid() {
        let stack = new Stack();
        let mid = Math.floor(this.items.length / 2)

        for (let i = 0; i < mid; i++) {
            stack.push(this.items.pop());
        }
        let removedElement = this.items.pop();

        while (stack.items.length > 0 ) {
            this.items.push(stack.items.pop())
        }
        
        console.log(stack.items);

        return removedElement;
    }
}


let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.items);

console.log(stack.removeMid());

console.log(stack.items);


function Valid(s){
    const stack=[]
    for(let char of s ){

        if(char==='(' || char==='{' || char==='['){
            stack.push(char)
        }
     else if(char===')' || char==='}' || char===']'){
            let prev=stack.pop()
        
        if((char===')' && prev!=='(') || (char==='}' && prev!=='{') && (char===']' && prev!=='[')){
            return false
        }
        else{
            return true
        }
      }
    }
}

const string='{[]}})'

console.log(Valid(string));