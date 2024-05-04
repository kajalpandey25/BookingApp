// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It works by iterating over the input data and, in each iteration, removing one element from the input data, finding its correct position within the sorted part of the array, and inserting it into that position. This process is repeated until no more elements are left in the input data, resulting in a sorted array.

// Here's a step-by-step explanation of how insertion sort works:

// 1. Start with the second element in the array (or list), assuming the first element is already sorted.
// 2. Compare the current element with the elements to its left in the sorted part of the array.
// 3. Shift the elements in the sorted part of the array that are greater than the current element to the right.
// 4. Insert the current element into the correct position in the sorted part of the array.
// 5. Repeat steps 2-4 for each remaining element in the array.
// Insertion sort has a time complexity of O(n^2) on average and worst-case scenarios.


// Consider the following array of integers:
// Array: [5,3,8,1,2]

// We'll apply insertion sort to this array:

// 1. First Pass (starting with the second element):
// Consider the second element, 3.
// Compare 3 with the elements to its left (5). Since 5 is greater than 3, shift 5 to the right.
// Insert 3 into its correct position.
// Array: [3, 5, 8, 1, 2]
// After the first pass, the first two elements (3, 5) are sorted.

// 2. Second Pass (starting with the third element):
// Consider the third element, 8.
// Compare 8 with the elements to its left (5). Since 5 is smaller than 8, no shift is needed.
// Insert 8 into its correct position.
// Array: [3, 5, 8, 1, 2]
// After the second pass, the first three elements (3, 5, 8) are sorted.

// 3. Third Pass (starting with the fourth element):
// Consider the fourth element, 1.
// Compare 1 with the elements to its left (8, 5, 3). Since they are all greater than 1, shift them to the right.
// Insert 1 into its correct position.
// Array: [1, 3, 5, 8, 2]
// After the third pass, the first four elements (1, 3, 5, 8) are sorted.

// 4. Fourth Pass (starting with the fifth element):
// Consider the fifth element, 2.
// Compare 2 with the elements to its left (8, 5, 3, 1). Since they are all greater than 2, shift them to the right.
// Insert 2 into its correct position.
// Array: [1, 2, 3, 5, 8]
// After the fourth pass, the entire array is sorted.
// No more passes are needed since all elements are in their correct positions.

// So, the sorted array using insertion sort is:
// Sorted Array: [1,2,3,5,8]

function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        // Store the current element to be compared
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const array = [5, 3, 8, 1, 2];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));
