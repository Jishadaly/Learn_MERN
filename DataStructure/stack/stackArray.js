class Stack {
  constructor(){
    this.items = []
  }

  isEmpty() {
    return this.length === 0 
  }

  push(value){
    this.items.push(value)
  }

  pop(){
    if(this.isEmpty()){
      console.log("underFlow");
    }else{
      return this.items.pop()
    }
  }
  revers(){
    if(!this.isEmpty()){
      for(let i= this.items.length - 1 ; i >=0 ;i--){
        console.log(this.items[i]);
      }
    }
  }

  print(){
    if (this.isEmpty()) {
       return null
    }
    console.log(this.items);
  }

  secondLast(){
    if(this.isEmpty()){
      return null
    }else{
      return this.items[this.items.length - 2]
    }
  }

  middle(){
    if (this.isEmpty()) {
      return "stack is empty"
    }
    const middleIndex = Math.floor(this.items.length /2)
    return this.items[middleIndex]
  }

  removeMiddle(){
    if (this.isEmpty()) {
       return "stack is empty"
    }

    const middleIndex =  Math.floor(this.items.length / 2);
    this.items.splice(middleIndex , 1)
  }

  removeMid(){
    if (this.isEmpty()) {
      return null
    }

    let mid = Math.floor(this.items.length /2)
    let temp = new Stack()

    for(let i=0 ; i<mid ; i++ ){
       temp.push(this.pop())
    }
    let midIndex = this.pop()

    while(!temp.isEmpty()){
      this.push(temp.pop())
    }
    return midIndex 
  }

}


let stack = new Stack()

stack.push(50)
stack.push(530)
stack.push(40)
stack.removeMiddle()
stack.print()
stack.revers()
