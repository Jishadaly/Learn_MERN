class Node {
  constructor() {
    this.children = {}
    this.isWordEnd = false
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;

    console.log(curr)

    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];

      if (!curr.children.hasOwnProperty(charToInsert)) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert]
    }

    curr.isWordEnd = true
  }

  contains(word) {
    let curr = this.root

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i]

      if (!curr.children[charToFind]) {
        return false
      }
      curr = curr.children[charToFind]
    }

    return curr.isWordEnd;
  }

  startWith(word) {
    let curr = this.root

    for (let i = 0; i < word.length; i++) {
      let wordToFind = word[i]

      if (!curr.children.hasOwnProperty(wordToFind)) {
        return false
      }

      curr = curr.children[wordToFind]
    }

    return true
  }

  delete(word) {
    if (!this.contains(word)) {
      console.log('please add existing word')
      return
    }

    this.deleteHelper(this.root, word, 0)
  }

  deleteHelper(node, word, index) {
    if (word.length === index) {
      node.isWordEnd = false;
      return
    }

    let charToDelete = word[index]
    let nextNode = node.children[charToDelete]
    this.deleteHelper(nextNode, word, index + 1)

    if (Object.values(nextNode) === 0 && !nextNode.isWordEnd) {
      delete node.children[charToDelete];
    }
  }

}

const trie = new Trie()

trie.insert('hello world')
trie.insert('hello gys')
console.log(trie.contains('hello world'))
console.log(trie.startWith('hello'))
trie.delete('hello gys')
console.log(trie.contains('hello gys'))
console.log(trie.startWith('hello'))