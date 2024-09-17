const arr = [2,3,5,7,4,5]

function bubleSort(){
    let swaped 
    do {
        swaped = false;
        for(let i=0 ;i<arr.length;i++){
            if (arr[i]> arr[i+1]) {
                temp  = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp

                swaped  = true
            }
        }
    }while(swaped);
}

bubleSort(arr);