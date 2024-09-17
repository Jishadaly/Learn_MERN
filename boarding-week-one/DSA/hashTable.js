class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let totel;
        for (let i = 0; i < key.length; i++) {
            totel += key.charCodeAt(i);
        }
        return totel % this.size;
    }

    set(key, value) {
        const index =this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }
    
    get(key) {
        let index = this.hash(key)
        const bucket = this.table[index];

        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket) {
            let samekeyItem = bucket.find((item) => item[0] === key)

            if (samekeyItem) {
                bucket.splice(bucket.indexOf(samekeyItem), 1);
            }
        }
    }

}

const tabel = new HashTable(50);
tabel.set('name', 'jishad');
console.log(tabel.get('name'));