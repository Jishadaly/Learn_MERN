class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size 
  }
  
  hash(key) {
    let totel = 0
    for (let i = 0; i < key.length; i++) {
      totel += key.charCodeAt(i);
    }
    return totel % this.size
  } 

  set() {

    const index = this.hash(key);
    const bucket = this.table[index]

    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      let sameKeyItem = bucket.find(item => item[0] === key)

      if (sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key)
    let bucket = this.table[index]

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }

    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)
      }
    }
  }
}



