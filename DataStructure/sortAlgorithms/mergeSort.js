function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let mid = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, mid)
  let rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr]
}


console.log(mergeSort([34, 6, 2, 5, 2, 5]))

/*
Merge Sort — Quick Notes
Idea:
A divide-and-conquer sorting algorithm that splits the array into halves, sorts each half recursively, and then merges the sorted halves back together.

How it works:
Split the array into two halves.

Recursively sort each half.

Merge the two sorted halves into one sorted array.

Example:
Array: [38, 27, 43, 3, 9, 82, 10]

Split into
[38, 27, 43, 3] and [9, 82, 10]

Keep splitting until each subarray has 1 element
e.g., [38], [27], [43], [3], [9], [82], [10]

Merge smallest pieces:

[38] + [27] → [27, 38]

[43] + [3] → [3, 43]

[9] + [82] → [9, 82]

Merge [27, 38] + [3, 43] → [3, 27, 38, 43]

Merge [9, 82] + [10] → [9, 10, 82]

Merge the big halves:
[3, 27, 38, 43] + [9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]

Complexity:
Time: O(n log n) for best, average, and worst case.

Space: O(n) (needs extra space for merging).

Stable: Yes (preserves order of equal elements).

Good for: Large datasets, linked lists, and stable sorting needs.

Analogy:
Like sorting playing cards by splitting them into smaller piles, sorting each pile, then combining piles while keeping order.
*/