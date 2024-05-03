// Binary search is an efficient searching algorithm used to find a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval becomes empty.

// Here's how binary search works:

// 1. Initial Setup: Binary search requires the array to be sorted in ascending order. If the array is not sorted, it needs to be sorted first.
// 2. Define the Search Interval: Initially, the search interval includes the entire array.
// 3. Midpoint Calculation: Find the midpoint of the current search interval. This can be done by calculating the average of the low and high indices: mid = (low + high) / 2.
// 4. Compare with the Target: Compare the value at the midpoint with the target value.
// If the value at the midpoint is equal to the target, the search is successful, and the index of the midpoint is returned.
// If the value at the midpoint is greater than the target, the search continues in the left half of the array. Update the high index to mid - 1.
// If the value at the midpoint is less than the target, the search continues in the right half of the array. Update the low index to mid + 1.
// 5. Repeat: Repeat steps 3 and 4 until the target value is found or the low index exceeds the high index, indicating that the target is not present in the array.
// Binary search has a time complexity of O(log n), where n is the number of elements in the array. This makes it much faster than linear search, especially for large datasets.

// Example->
// Suppose we have a sorted array of integers:
// [2, 5, 7, 12, 15, 20, 23, 28]
// And we want to search for the element 12.

// Here's how binary search would proceed:

// 1. Initial Setup: Define the low index as 0 and the high index as the length of the array minus 1.
// Low index: 0
// High index: 7
// 2. Midpoint Calculation: Calculate the midpoint index as (low + high) / 2, which is 3 in this case.
// 3. Compare with the Target: Compare the element at the midpoint (index 3) with the target element 12.
// The element at index 3 is 12, which matches the target. So, the search is successful, and we return the index 3.

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            low = mid + 1; // Target is in the right half
        } else {
            high = mid - 1; // Target is in the left half
        }
    }
    
    return -1; // Element not found
}

// Example usage:
const arr = [2, 5, 7, 12, 15, 20, 23, 28];
const target = 12;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
