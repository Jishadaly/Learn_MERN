function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numToInsert = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = numToInsert
  }
  return arr
}
console.log(insertionSort([473, 3, 52, 7, 26]));

/*
Insertion Sort — Quick Notes
Idea:

Sorts an array by building the sorted portion one element at a time, inserting each new element into its correct position in the already sorted part.

How it works:

Start with the second element (index 1).

Compare it with elements before it (the sorted portion).

Shift all larger elements to the right.

Insert the current element into the gap.

Repeat for all elements.

Example:
Unsorted: [8, 3, 5, 2]

Take 3, insert before 8 → [3, 8, 5, 2]

Take 5, insert between 3 and 8 → [3, 5, 8, 2]

Take 2, insert at start → [2, 3, 5, 8] ✅

Time Complexity:

Best: O(n) → already sorted

Worst: O(n²) → reverse sorted

Average: O(n²)

Space Complexity: O(1) (in-place)

When to use:

Small arrays

Arrays that are already mostly sorted

When simplicity matters over speed

Analogy:
Like sorting cards in your hand — pick the next card, insert it in the right spot among your held cards.

*/



