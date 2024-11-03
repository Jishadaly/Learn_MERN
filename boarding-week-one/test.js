let a = [0, 3, 4, 7, 1, 5, 0, 9, 8, 7, 2, 0, 6, 5];

function findRepeatedEl(arr){

    let repeatedEl = []
    let counted = {}

    for (let i = 0; i < arr.length; i++) {

        if (counted[arr[i]]) {
            continue;
        }

        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                count++
            }
        }
        if (count > 0  ) {
            repeatedEl.push(arr[i]);
            counted[arr[i]] = true
        }

        console.log(counted);
        
    }

    return repeatedEl

}

console.log(findRepeatedEl(a))