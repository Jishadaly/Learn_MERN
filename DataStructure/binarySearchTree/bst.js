
class Node{
  constructor(){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  isEmpty(){
    return this.root === null
  }

  insert(value){
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.root = newNode
    }else{
      this.insertNode(this.root , newNode)
    }
  }


    insertNode(rootNode, newNode){
        if (rootNode.value < newNode.value) {
           if (rootNode.left === null) {
              rootNode.left = newNode
           }else{
            this.insertNode(rootNode.left , newNode)
           }
        }else{
          if (rootNode.right === null) {
            rootNode.right = newNode
          }else{
            this.insertNode(rootNode.right , newNode)
          }
        }
    }

    search(root,value){
      if(!root){
        return null
      }else{
        if (root.value === value) {
          return true
        }
        else if(root.left < value){
          return this.search(root.left , value)
        }else{
          return this.search(root.right , value)
        }
      }
    }

    max(root){
      if (!root.right) {
        return  root.value
      }else{
          return this.max(root.right)
      }
    }

    min(root){
      if (!root.left) {
        return root.value
      }else{
        return root.min(root.left)
      }
    }

    preOrder(root){
      if (root) {
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
      }
    }

    inOrder(root){
      if (root) {
        
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
      }
    }

    postOrder(root){
      if (root) {
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
      }
    }

    bfs(){
      const queue = []
      queue.push(this.root)

      while(queue.length){
        let curr = queue.shift()
        console.log(curr.value);
        if (curr.left) {
           curr = queue.push(curr.left)
        }
        if (curr.right) {
          curr = queue.push(curr.right)
        }
      }
    }

}