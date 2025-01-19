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

        while (stack.items.length > 0) {
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

// console.log(stack.items);


function Valid(s) {
    const stack = []

    let obj = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    for (let char in s) {
        if (char in ob) {
            stack.push(char)
            console.log('char', char);
        } else {
            let top = stack.pop()
            if (char !== obj[top]) {
                return false
            }
        }
    }

    return stack.length === 0
}

const string = '{[]}})'

// console.log(Valid(string));

// sort a stack 
function sortStack(stack) {
    let tempStack = []

    while (stack.length > 0) {
        let temp = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
            stack.push(tempStack.pop())
        }

        tempStack.push(temp);
    }

    while (tempStack.length > 0) {
        stack.push(tempStack.pop())
    }
}
const stacktosort = [34, 3, 31, 98, 92, 23];
//   sortStack(stacktosort);


class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class StackLL {

    constructor() {
        this.top = null
        this.size = null
    }

    isEmpty() {
        this.size === null
    }

    push(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.top = node;
        } else {
            node.next = this.top
            this.top = node
        }

        this.size++;
    }

    print() {
        let curr = this.top;

        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }

        let removed = this.top
        this.top = this.top.next
        this.size--

        return removed
    }

}

const st = new StackLL();

st.push(5)
st.push(9)
st.push(3)
st.print()
console.log(st.top);

st.pop()
st.print()
console.log(st.top);


class stackUsingQueue{
    constructor(){
        this.queue = [];
    }

    push(x){
        this.queue.push(x)

        let size = this.queue.length ;
        while (size > 1) {
            this.queue.push(this.queue.shift())
            size -- ;
        }
    }

    pop(){
        if (this.queue.length === 0) {
            return null
        }

        return this.queue.shift();
    }
    
}

function sortStack(stack) {
    let tempStack = []

    while (stack.length) {
        let curr = stack.pop()

        if (curr % 2 !== 0) {

            tempStack.push(curr)
        } else {
            while (tempStack.length && tempStack[tempStack.length - 1] < curr) {
                stack.push(tempStack.pop())
            }
            tempStack.push(curr)
        }
    }

    while (tempStack.length > 0) {
        stack.push(tempStack.pop())
    }
    return stack
}


const stack = [4, 8, 3, 1, 2, 6]
console.log(sortStack(stack));