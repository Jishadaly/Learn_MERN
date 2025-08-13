
function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

console.log(selectionSort([473, 3, 52, 7, 26]));

/*
Selection Sort — Quick Notes
Idea:
Sorts an array by repeatedly finding the smallest element from the unsorted part and moving it to the front.

How it works:

Start at the first index i.

Assume i holds the smallest element (min = i).

Scan the rest of the array (from i+1 to end) to find the smallest value.

Swap the smallest value with the value at i.

Move to the next index (i+1) and repeat until sorted.

Example:
Unsorted: [64, 25, 12, 22, 11]

Pass 1: Smallest = 11 → swap with 64 → [11, 25, 12, 22, 64]

Pass 2: Smallest in rest = 12 → swap with 25 → [11, 12, 25, 22, 64]

Pass 3: Smallest in rest = 22 → swap with 25 → [11, 12, 22, 25, 64]

Pass 4: Smallest in rest = 25 (already correct) → [11, 12, 22, 25, 64]

Complexity:

Time: O(n²) in best, average, and worst case.

Space: O(1) → sorts in place.

Stability: Not stable by default (can swap equal elements out of order).

Good for: Small datasets, or when minimizing swaps is important.

Analogy:
Like sorting people by height by repeatedly scanning the whole group to find the shortest and moving them to the front.
*/

