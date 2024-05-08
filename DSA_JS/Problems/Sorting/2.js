// Bubble sort is another simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// Here's a step-by-step explanation of how bubble sort works:

// 1. Start from the beginning of the array.
// 2. Compare the first two elements. If the first element is greater than the second element, swap them.
// 3. Move to the next pair of elements and repeat step 2.
// 4. Continue this process, iterating through the array multiple times until no more swaps are needed, indicating that the array is sorted.
// Bubble sort has a time complexity of O(n^2).

// Consider the following array of integers:
// Array: [5,3,8,1,2]

// We'll apply bubble sort to this array:

// 1. First Pass:
// Compare 5 and 3. Since 5 > 3, swap them.
// Array: [3, 5, 8, 1, 2]
// Compare 5 and 8. Since 5 < 8, no swap needed.
// Compare 8 and 1. Since 8 > 1, swap them.
// Array: [3, 5, 1, 8, 2]
// Compare 8 and 2. Since 8 > 2, swap them.
// Array: [3, 5, 1, 2, 8]
// After the first pass, the largest element (8) is in its correct position at the end of the array.

// 2. Second Pass:
// Compare 3 and 5. Since 3 < 5, no swap needed.
// Compare 5 and 1. Since 5 > 1, swap them.
// Array: [3, 1, 5, 2, 8]
// Compare 5 and 2. Since 5 > 2, swap them.
// Array: [3, 1, 2, 5, 8]
// After the second pass, the second largest element (5) is in its correct position.

//3. Third Pass:
// Compare 3 and 1. Since 3 > 1, swap them.
// Array: [1, 3, 2, 5, 8]
// Compare 3 and 2. Since 3 > 2, swap them.
// Array: [1, 2, 3, 5, 8]
// After the third pass, the third largest element (3) is in its correct position.

//4. Fourth Pass:
// Compare 1 and 2. Since 1 < 2, no swap needed.
// After the fourth pass, the fourth largest element (2) is in its correct position.
// No more swaps are needed after the fourth pass, indicating that the array is sorted.

// So, the sorted array using bubble sort is:
// Sorted Array: [1,2,3,5,8]

function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Example usage:
const array = [5, 3, 8, 1, 2];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));
