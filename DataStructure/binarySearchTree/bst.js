

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.nodeToInsert(this.root, newNode);
    }
  }

  nodeToInsert(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      if (rootNode.left === null) {
        rootNode.left = newNode
      } else {
        this.nodeToInsert(rootNode.left, newNode)
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode
      } else {
        this.nodeToInsert(rootNode.right, newNode);
      }
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  preOrder(root) {
    if (root) {
      this.preOrder(root.left)
      this.preOrder(root.right)
      console.log(root.value)
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  search(root, value) {
    if (!root) return false

    if (root.value === value) {
      return true
    }

    else if (value < root.value) {
      return this.search(root.left, value)
    } else {
      return this.search(root.right, value)
    }

  }

  min(root) {
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  max(root) {
    if (!root.right) {
      return root.value + value
    } else {
      return this.min(root.right)
    }
  }

  bfs() {

    const queue = [root];

    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr.value)

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)

    }
  }

  depth(root, value, currentDepth = 0) {
    if (!root) return -1;

    if (root.value === value) return currentDepth;

    if (root.value < value) {
      return this.depth(root.left, value, currentDepth + 1)
    } else {
      return this.depth(root.right, value, currentDepth + 1)

    }
  }

  height(root) {
    if(!root) return -1;

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.left);

    return 1 + Math.max(leftHeight + rightHeight);
  }

}

const bst = new BinarySearchTree()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(40)
bst.insert(60)
bst.insert(80)

// console.log(bst.root)
// bst.inOrder(bst.root)

console.log(bst.search(bst.root, 40))
console.log(bst.max(bst.root))