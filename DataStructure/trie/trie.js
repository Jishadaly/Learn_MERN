class Node {
  constructor(){
    const children = {}
    isWordEnd = false
  }
}

class Trie {
  constructor(){
    this.root = new Node()
  }

  insert(word){
    let curr = this.root
    for(let i=0;i<word.length;i++){
      let charToInsert = word[i]

      if (!curr.children.hasOwnProperty(charToInsert)) {
         curr.children[charToInsert] = new Node()
      }

      curr = curr.children[charToInsert]
    }
    return curr.isWordEnd = true
  }

  contains(word){
    let curr = this.root
    for(let i=0;i<word.length;i++){
       let charToInsert = word[i]
       if(!curr.children.hasOwnProperty(charToInsert)){
        return false
       }
       curr = curr.children[charToInsert]
    }
     return curr.isWordEnd
  }

  startWithPreffix(word){
    let curr = this.root
    for(let i=0;i<word.length;i++){
       let charToInsert = word[i]
       if (!curr.children.hasOwnProperty(charToInsert)) {
         return false
       }
       curr = curr.children[charToInsert]
    }
    return  true
  }

  // delete(word){
  //   if (!this.contains(word)) {
  //     console.log(`the word "${word}" is not in the trie`);
  //     return
  //   }

  //   this.deleteHealper(this.root , word , 0)
  // }
  
  // deleteHealper(node , word , index){
  //    if (index === word.length ) {
  //     node.isWordEnd = false
  //     return

  //    }

  //    const charToDelete = word[index]
  //    const nextNode = node.children[charToDelete]
  //    this.deleteHealper(nextNode , word ,index + 1)

  //    if (Object.keys(nextNode.children).length === 0 && !nextNode.isWordEnd) {
  //       delete node.children[charToDelete]
  //    }
  // }

  delete(word){
    if (!this.contains(word)) {
      console.log(`${word}  word not in the trie`);
      return
    }
    this.deleteHelper(this.root , word , 0)
  }

  deleteHelper(node , word , index){
     if (index === word.length) {
       node.isWordEnd = false

       return
     }

     const charToDelete = word[index]
     const nextNode = node.children[charToDelete]
     this.deleteHelper(nextNode , word , index + 1)

     if (Object.keys(nextNode.children).length === 0 && !node.isWordEnd ) {
       delete node.children[charToDelete]
     }
  }
  
}

class Node{
  constructor(){
    const children = {}
    isWordEnd = false
  }
}

class Trie{
  constructor(){
    this.root = new Node();
  }
}

insert(word){
  let curr = this.root;

  for(let i =0 ; i<word.length ; i++){
     let charToInsert = word[i]

     if (!curr.children.hasOwnProperty(charToInsert)) {
        curr.children[charToInsert] = new Node()
     }

     curr = curr.children[charToInsert] 
  }
  curr.isWordEnd = true
}