// Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. The algorithm maintains two subarrays in a given array:

// 1. The subarray that is already sorted.
// 2. The remaining subarray that is unsorted.

// Here's a step-by-step explanation of how selection sort works:

// Find the smallest element in the array and swap it with the element in the first position.
// Find the second smallest element in the array (excluding the first element) and swap it with the element in the second position.
// Repeat this process for the remaining elements until the array is sorted.
// Selection sort has a time complexity of O(n^2)

// Consider the following array of integers:
// Array: [5,3,8,1,2]

// We'll apply selection sort to this array:

// 1. First Pass:
// Find the minimum element in the array. The minimum element is 1.
// Swap the minimum element with the first element of the array.
// Array: [1, 3, 8, 5, 2]
// After the first pass, the first element (1) is in its correct position.

// 2. Second Pass:
// Consider the subarray starting from the second element (3, 8, 5, 2).
// Find the minimum element in this subarray. The minimum element is 2.
// Swap the minimum element with the second element of the array.
// Array: [1, 2, 8, 5, 3]
// After the second pass, the second element (2) is in its correct position.

// 3. Third Pass:
// Consider the subarray starting from the third element (8, 5, 3).
// Find the minimum element in this subarray. The minimum element is 3.
// Swap the minimum element with the third element of the array.
// Array: [1, 2, 3, 5, 8]
// After the third pass, the third element (3) is in its correct position.

// 4. Fourth Pass:
// Consider the subarray starting from the fourth element (5, 8).
// Find the minimum element in this subarray. The minimum element is 5.
// Swap the minimum element with the fourth element of the array.
// Array: [1, 2, 3, 5, 8]
// After the fourth pass, the fourth element (5) is already in its correct position.
// No more swaps are needed after the fourth pass, indicating that the array is sorted.

// So, the sorted array using selection sort is:
// Sorted Array: [1,2,3,5,8]

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // Assume the current index has the minimum value
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the current element (if they are different)
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Example usage;
const array = [5, 3, 8, 1, 2];
console.log("Original array:", array);
console.log("Sorted aaray:", selectionSort(array));
