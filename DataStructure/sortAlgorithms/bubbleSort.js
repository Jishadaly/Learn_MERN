function bubleSort(arr) {
    let swaped;

    do {
        swaped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swaped = true
            }
        }
    } while (swaped)

    return arr;
}
const arr = [2, 3, 5, 7, 4, 5]
console.log(bubleSort(arr))