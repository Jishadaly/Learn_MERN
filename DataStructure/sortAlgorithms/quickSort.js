function quickSort(arr) {

  if (arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length - 1]
  let leftArr = []
  let rightArr = []

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([34, 6, 2, 5, 2, 5]));


/*
Quick Sort — Quick Notes
Idea:
A divide-and-conquer algorithm that sorts an array by:

Picking a pivot element.

Rearranging (partitioning) the array so all smaller elements are on one side and larger ones on the other.

Recursively sorting the left and right parts.

How it works:

Choose a pivot (first, last, middle, or random element).

Partition the array:

Elements smaller than pivot → left side.

Elements larger than pivot → right side.

Pivot now sits in its correct sorted position.

Recursively quick sort the left and right subarrays until subarrays have 1 or 0 elements.

Example:
Unsorted: [8, 3, 5, 2, 7]
Pivot = 5

Left: [3, 2]

Right: [8, 7]
Sort left → [2, 3]
Sort right → [7, 8]
Final: [2, 3, 5, 7, 8]

Complexity:

Best: O(n log n)

Average: O(n log n)

Worst: O(n²) (when pivot selection is poor, e.g., always smallest/largest element)

Space: O(log n) (for recursion stack)

Stability: Not stable by default.
Good for: Large datasets, general-purpose fast sorting.
function quickSort(arr) {

  if (arr.length < 2) {
    return []
  }
  let pivot = arr[arr.length - 1]
  let leftArr = []
  let rightArr = []

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
Analogy:
Like picking one student in a class (pivot), telling everyone shorter to stand left, taller to stand right, and then repeating the process in each group until everyone is in order.

*/