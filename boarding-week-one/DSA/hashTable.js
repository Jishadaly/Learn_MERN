

class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hashFun(key) {
        let totel = 0;
        for (let i = 0; i < key.length; i++) {
            totel += key.charCodeAt(i)
        }
        
        return totel % this.size
    }

    set(key, value) {
        const index = this.hashFun(key)

        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find((val) => val[0] == key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hashFun(key);
        const bucket = this.table[index]

        if (!bucket) {
            return undefined
        } else {
            const sameKeyItem = bucket.find((val) => val[0] == key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            } else {
                return null
            }
        }
    }

    remove(key) {
        const index = this.hashFun(key)
        const bucket = this.table[index]

        if (!bucket) {
            return undefined
        } else {
            const sameKeyItem = bucket.find((val) => val[0] == key)

            if (sameKeyItem) {
                bucket.splice(bucket.index(sameKeyItem), 1)
            }
        }
    }

}


const tabel = new HashTable(50);

tabel.set('jishad', 30)
console.log(tabel.get('jishad'));

