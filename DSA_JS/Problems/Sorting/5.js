
// Quick sort is another efficient sorting algorithm that follows the divide-and-conquer approach. It works by selecting a "pivot" element from the array and partitioning the other elements into two subarrays according to whether they are less than or greater than the pivot. The subarrays are then recursively sorted.

// Here's a basic outline of how quick sort works:

// 1. Choose a pivot element from the array. This pivot element can be selected in various ways, such as picking the first element, the last element, or a random element.

// 2. Partition the array into two subarrays: one containing elements less than the pivot and the other containing elements greater than the pivot. Elements equal to the pivot can go on either side.

// 3. Recursively apply quick sort to the subarrays created in step 2 until the entire array is sorted.

// 4. Combine the sorted subarrays to get the final sorted array.
// 5. In-place

// Quick sort is known for its efficiency and is often faster in practice compared to other sorting algorithms like merge sort for smaller datasets, especially due to its in-place partitioning and fewer recursive calls.
// The average-case time complexity of quick sort is O(n log n), where n is the number of elements in the array. However, in the worst case, quick sort can have a time complexity of O(n^2)

// Suppose we have an unsorted array: [7, 2, 1, 6, 8, 5, 3, 4].

// Choose a pivot: Let's choose the last element of the array as the pivot. So, our pivot is 4.
// Partitioning: We'll partition the array into two subarrays: elements less than the pivot and elements greater than the pivot. After partitioning, elements less than 4 will be on the left, and elements greater than 4 will be on the right.[2, 1, 3] | [4] | [7, 6, 8, 5]
// Recursively apply quick sort: We'll recursively apply quick sort to the two subarrays [2, 1, 3] and [7, 6, 8, 5].
// For [2, 1, 3]:
// Choose 3 as the pivot.
// Partition [2, 1, 3] into [1] | [2] | [3].
// As both partitions contain only one element, they are already sorted.
// For [7, 6, 8, 5]:
// Choose 5 as the pivot.
// Partition [7, 6, 8, 5] into [6] | [5] | [7, 8].
// Apply quick sort recursively to [6] and [7, 8].
// For [6], no further action is needed as it's a single element.
// For [7, 8], no further action is needed as it's already sorted.
// Combine the sorted subarrays: Combine the sorted subarrays [1, 2, 3, 4, 5, 6, 7, 8].
// So, the final sorted array is [1, 2, 3, 4, 5, 6, 7, 8].


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot go to the left subarray
        } else {
            right.push(arr[i]); // Elements greater than or equal to pivot go to the right subarray
        }
    }

    // Recursively apply quickSort to the left and right subarrays,
    // then concatenate the sorted subarrays with the pivot in between
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);
