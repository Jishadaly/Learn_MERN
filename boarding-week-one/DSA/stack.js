// // class Stack {
// //     constructor() {
// //         this.items = [];
// //         this.size = 0;
// //     }

// //     isEmpty() {
// //         return this.size === 0
// //     }

// //     push(value) {
// //         this.items.push(value);
// //     }

// //     pop() {
// //         if (this.isEmpty()) {
// //             return 'stack is empty'
// //         }
// //         const result = this.items.pop();
// //         return result;
// //     }
// // }


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
        

        // return this.items;
    }
}


let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)
stack.push(80)
console.log(stack.items);

console.log(stack.removeMid());

console.log(stack.items);
