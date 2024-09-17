class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return 'stack is empty'
        }
        const result = this.items.pop();
        return result;
    }
}
