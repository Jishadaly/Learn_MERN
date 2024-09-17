class Node {
    constructor(value) {
        this.value =
            this.next = null;
        this.prev = null;
    }
}

class doublyList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty) {
            this.head = value
            this.tail = value
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;

    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = value;
            this.tail = value;
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size ++
    }
    
}

