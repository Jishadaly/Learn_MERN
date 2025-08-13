// Remove the duplicate from nested array using recursion or without

const arr = [1, [2, 3, [4, 5, 2, 3]], 1, 6, [4, [5, 6, 1]]];

function removeDups(arr, seen = new Set()) {

    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc.push(removeDups(item, seen))
        } else if (!seen.has(item)) {
            acc.push(item)
            seen.add(item)
        }

        return acc
    }, [])
}

// console.log(removeDups(arr))

// Convert nested array into flat array using recursion or without

function flatternArray(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
           acc =  acc.concat(flatternArray(item))
        } else {
            acc.push(item)
        }

        return acc
    }, [])
}

// console.log(flatternArray(arr))