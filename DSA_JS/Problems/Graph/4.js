// Here's a simplified overview of the brute force backtracking approach:

// Generate Options:
// At each decision point, generate all possible options or choices available.
// Make a Choice:
// Choose one of the options and proceed to the next decision point.
// Check Constraints:
// Check if the current configuration satisfies the problem constraints or criteria.
// Explore:
// If the current configuration is valid, recursively explore further by making choices at the next decision point.
// Backtrack:
// If the current configuration leads to a dead end (i.e., violates constraints), backtrack to the previous decision point and try a different option.
// Repeat:
// Repeat steps 2-5 until all possible configurations have been explored or until a valid solution is found.
// It's important to note that the efficiency of the brute force backtracking approach depends on the problem's complexity and the size of the search space. For problems with a large search space, brute force may not be feasible due to its exponential time complexity.

function solveNQueens(n) {
    const result = [];

    // Initialize an empty chessboard
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

    // Helper function to check if a queen can be placed at a given position
    function isValid(row, col) {
        // Check if there is a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // Check if there is a queen in the upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check if there is a queen in the upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    // Helper function to backtrack and place queens
    function backtrack(row) {
        // Base case: all rows are filled, add the current board configuration to the result
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        // Try placing a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                // Place the queen
                board[row][col] = 'Q';
                // Recursively move to the next row
                backtrack(row + 1);
                // Backtrack and remove the queen
                board[row][col] = '.';
            }
        }
    }

    // Start backtracking from the first row
    backtrack(0);

    return result;
}

// Example usage:
const n = 4;
const solutions = solveNQueens(n);
console.log(`Number of solutions for ${n} queens:`, solutions.length);
solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
    console.log();
});
