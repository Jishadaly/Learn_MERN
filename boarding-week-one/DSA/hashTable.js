// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hashFun(key) {
//         let totel = 0;
//         for (let i = 0; i < key.length; i++) {
//             totel += key.charCodeAt(i)
//         }

//         return totel % this.size
//     }

//     set(key, value) {
//         const index = this.hashFun(key)

//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const sameKeyItem = bucket.find((val) => val[0] == key)
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         const index = this.hashFun(key);
//         const bucket = this.table[index]

//         if (!bucket) {
//             return undefined
//         } else {
//             const sameKeyItem = bucket.find((val) => val[0] == key)
//             if (sameKeyItem) {
//                 return sameKeyItem[1]
//             } else {
//                 return null
//             }
//         }
//     }

//     remove(key) {
//         const index = this.hashFun(key)
//         const bucket = this.table[index]

//         if (!bucket) {
//             return undefined
//         } else {
//             const sameKeyItem = bucket.find((val) => val[0] == key)

//             if (sameKeyItem) {
//                 bucket.splice(bucket.index(sameKeyItem), 1)
//             }
//         }
//     }

// }


// const tabel = new HashTable(50);

// tabel.set('jishad', 30)
// console.log(tabel.get('jishad'));




class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];


        if (!bucket) {
            table.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find((item) => item[0] === key)

            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }

    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            return null
        } else {
            let sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) {

                return sameKeyItem[1]
            } else {
                return null
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index]

        if (bucket) {
            let sameKeyItemIndex = bucket.findIndex((item) => item[0] === key)
            console.log('index :' ,sameKeyItemIndex)

            if (sameKeyItemIndex) {
                bucket.splice(sameKeyItemIndex, 1)
            }else{
                return null
            }
        }
    }

}


const table = new HashTable(50);
table.set("name", "John")
table.set("age", 25)
console.log(table.get("name"))  // John
table.remove("name")
console.log(table.get("name"))  // null

