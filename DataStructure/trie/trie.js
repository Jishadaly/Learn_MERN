// class Node {
//   constructor() {
//     const children = {}
//     isWordEnd = false
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node()
//   }

//   insert(word) {
//     let curr = this.root
//     for (let i = 0; i < word.length; i++) {
//       let charToInsert = word[i]

//       if (!curr.children.hasOwnProperty(charToInsert)) {
//         curr.children[charToInsert] = new Node()
//       }

//       curr = curr.children[charToInsert]
//     }
//     return curr.isWordEnd = true
//   }

//   contains(word) {
//     let curr = this.root
//     for (let i = 0; i < word.length; i++) {
//       let charToInsert = word[i]
//       if (!curr.children.hasOwnProperty(charToInsert)) {
//         return false
//       }
//       curr = curr.children[charToInsert]
//     }
//     return curr.isWordEnd
//   }

//   startWithPreffix(word) {
//     let curr = this.root
//     for (let i = 0; i < word.length; i++) {
//       let charToInsert = word[i]
//       if (!curr.children.hasOwnProperty(charToInsert)) {
//         return false
//       }
//       curr = curr.children[charToInsert]
//     }
//     return true
//   }  

//   delete(word){
//     if (!this.contains(word)) {
//       console.log(`the word "${word}" is not in the trie`);
//       return
//     }

//     this.deleteHealper(this.root , word , 0)
//   }

//   deleteHealper(node , word , index){
//      if (index === word.length ) {
//       node.isWordEnd = false
//       return

//      }

//      const charToDelete = word[index]
//      const nextNode = node.children[charToDelete]
//      this.deleteHealper(nextNode , word ,index + 1)

//      if (Object.keys(nextNode.children).length === 0 && !nextNode.isWordEnd) {
//         delete node.children[charToDelete]
//      }
//   }

// }  


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

}

const trie = new Trie()

trie.insert('hello world')
console.log(trie.contains('hello world'))
console.log(trie.startWith('hello'))

// console.log(trie.root.children)