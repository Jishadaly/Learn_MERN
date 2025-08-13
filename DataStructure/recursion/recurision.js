function palindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    return palindrome(str.slice(1, -1))
}
// console.log(palindrome('atwwa'));

function fibnacci(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }

    return fibnacci(n - 1) + fibnacci(n - 2)
}
console.log(fibnacci(10));

function flatternArry(arr) {
    const out = []

    for (const item of arr) {
        if (Array.isArray(item)) out.push(...flatternArry(item))
        else out.push(item)
    }
    return out
}

const arr = [1, [2, 3, [4, 5, 2, 3]], 1, 6, [4, [5, 6, 1]]];
console.log(flatternArry(arr))


// Write a recursive function findKey(obj, target) that searches a nested object (which may contain more objects inside it) for a given target key and returns its value.
// If the key isn’t found anywhere, return undefined.

function findKey(obj, target) {
    if (obj == null || typeof obj !== 'object') return undefined
    if (obj in target) return obj[target]

    for (let val of Object.values(obj)) {
        const found = findKey(val, target)
        if (found !== undefined) return found
    }
    return undefined
}


const data = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        geo: {
            lat: 51.5074,
            lng: 0.1278
        }
    },
    contact: {
        email: "alice@example.com",
        phone: {
            home: "555-1234",
            work: "555-5678"
        }
    }
};

console.log(findKey(data, "city"))