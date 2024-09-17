class Queue {
    constructor(){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if (this.isEmpty()) {
            return "queue is empty"
        }

       return this.items.shift()
    }
}