// Merge sort is a popular sorting algorithm that follows the divide-and-conquer paradigm. It works as follows:

// Divide: The unsorted list is divided into two equal parts recursively until each sublist contains only one element. This is done until further division is not possible.

// Conquer: Once the base case of having sublists with only one element is reached, the sorting begins. The sublists are then merged back together, in a sorted manner. This merging process is done recursively, combining smaller sorted lists into larger sorted lists until the entire list is sorted.

// Merge: During the merging process, the elements from the divided sublists are compared and merged into a single sorted list. This is done by comparing the elements from each sublist and arranging them in ascending or descending order, depending on the desired sorting order.

// Merge sort is known for its stability (maintaining the order of equal elements), predictable performance (its time complexity is O(n log n) in the average and worst-case scenarios).

// Suppose we have the array: [38, 27, 43, 3, 9, 82, 10]

// Divide: We start by dividing the array into two halves.[38, 27, 43, 3] and [9, 82, 10]We continue this process recursively until each sublist contains only one element.
// Conquer: Now, we start merging the sublists back together in sorted order. We compare the elements of the sublists and arrange them in ascending order.[27, 38, 3, 43] and [9, 10, 82]
// Merge: We merge the two sorted sublists into a single sorted list.[3, 9, 10, 27, 38, 43, 82]
// This sorted list is the result of applying merge sort to the initial array [38, 27, 43, 3, 9, 82, 10]. The time complexity of merge sort in this case is O(n log n), where n is the number of elements in the array.

// Properties of merge sort algorithms:-

// 1. Divide and conquer
// 2. Recursive
// 3. stable sorting algorithms
// 4. Not In-place  - o(n) space complexity
// 5. o(nlogn) time complexity 


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);
