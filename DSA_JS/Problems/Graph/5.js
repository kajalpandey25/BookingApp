// The Sum of Subsets Problem is a classic problem in computer science and combinatorial optimization. Given a set of positive integers and a target sum, the task is to find all possible subsets of the given set whose sum is equal to the target sum.

// Here's how you can solve the Sum of Subsets Problem using backtracking in JavaScript:

function sumOfSubsets(set, targetSum) {
    const result = [];

    // Helper function to backtrack and find subsets
    function backtrack(startIndex, subset, currentSum) {
        // Base case: if the current sum equals the target sum, add the subset to the result
        if (currentSum === targetSum) {
            result.push(subset.slice()); // Add a copy of the subset to the result
            return;
        }

        // Backtrack and explore all possible subsets
        for (let i = startIndex; i < set.length; i++) {
            // Include the current element in the subset
            if (currentSum + set[i] <= targetSum) {
                subset.push(set[i]);
                backtrack(i + 1, subset, currentSum + set[i]);
                subset.pop(); // Backtrack and remove the current element
            }
        }
    }

    // Start backtracking from the beginning of the set
    backtrack(0, [], 0);

    return result;
}

// Example usage:
const set = [2, 4, 6, 8];
const targetSum = 8;
const subsets = sumOfSubsets(set, targetSum);
console.log("Subsets with sum equal to", targetSum + ":");
subsets.forEach(subset => console.log(subset));
