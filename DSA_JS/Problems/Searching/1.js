// Searching: It is a process of finding the element from a given set of elements. If found, display the location pf the element else print item not found.

// Linear search, also known as sequential search, is a simple searching algorithm that sequentially checks each element in a list or array until the target element is found or until the end of the list is reached.

// Here's how linear search works:

// Start from the first element of the list.
// Compare the target element with the current element being examined.
// If the target element matches the current element, the search is successful, and the index of the element is returned.
// If the target element is not found, move to the next element in the list and repeat steps 2 and 3.
// Continue this process until either the target element is found or until the end of the list is reached.
// Linear search is straightforward and easy to implement, making it suitable for small lists or arrays. However, it is not efficient for large datasets because it has a time complexity of O(n), where n is the number of elements in the list. This means that in the worst-case scenario, the time taken to search for an element increases linearly with the size of the input.
// note: Time-complexity = O(n)


// Example:
// [12, 45, 23, 6, 78, 54, 90, 32]
// And we want to search for the element 78.

// Here's how linear search would proceed:
// 1. Start from the first element of the array, which is 12.
// 2. Compare 12 with the target element 78. They don't match, so move to the next element.
// 3. Move to the second element, which is 45.
// 4. Compare 45 with the target element 78. They don't match, so move to the next element.
// 5. Move to the third element, which is 23.
// 6. Compare 23 with the target element 78. They don't match, so move to the next element.
// 7. Move to the fourth element, which is 6.
// 8. Compare 6 with the target element 78. They don't match, so move to the next element.
// 9. Move to the fifth element, which is 78.
// 10. Compare 78 with the target element 78. They match, so we've found the target element.
// 11. Return the index of the target element, which is 4.

// Function to perform linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
}

// Example usage:
const array = [12, 45, 23, 6, 0,  78, 54, 90, 32];
const target = 78;
const index = linearSearch(array, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
