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


class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    push(value) {
        this.items.push(value)
        return;
    }

    pop() {
        return this.items.pop();
    }

    peak() {
        if (this.isEmpty()) return null
        return this.items[this.items.length - 1]
    }

    removeMid() {
        const tempStak = new Stack();

        if (this.isEmpty()) return null
        let mid = Math.floor(this.items.length / 2)

        for (let i = 0; i < mid; i++) {
            tempStak.push(this.pop())
        }

        console.log(tempStak.items)
        let removedItem = this.pop();

        while (tempStak.items.length > 0) {
            this.push(tempStak.pop())
            // console.log(tempStak.pop())
        }
        return removedItem;
    }

    sortStack() {
        let tempStack = new Stack()

        while (!this.isEmpty()) {

            let curr = this.pop();

            while (!tempStack.isEmpty() && tempStack.peak() < curr) {
                this.push(tempStack.pop())
            }

            tempStack.push(curr);
        }

        while (!tempStack.isEmpty()) {
            stack.push(tempStack.pop())
        }

        return stack.items
    }

}

const stack = new Stack();

stack.push(5)
stack.push(8)
stack.push(2)
stack.push(10)
stack.push(15)
// console.log(stack.peak())
// console.log(stack.pop())
// console.log(stack.removeMid())
// console.log(stack.items)
// console.log(stack.sortStack())


function validParanthesis(str) {
    const validPara = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    const stack = []

    for (let char of str) {
        if (validPara[char]) {
            stack.push(char)
        } else {

            if (stack.length === 0) return false;

            let last = stack.pop();

            if (validPara[last] !== char) {
                return false;
            }
        }

    }
    return true;

}

console.log(validParanthesis("{[()]}"));