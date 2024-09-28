const arr = [2, 3, 42, 62];

function bubleSort(arr) {
    let swaped;
    do {
        swaped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

                swaped = true;
            }
        }
    } while (swaped);

    return arr
}

console.log(bubleSort(arr));