// here's a JavaScript implementation of the graph coloring problem using backtracking:

function graphColoring(graph, colors) {
    const numVertices = Object.keys(graph).length;
    const coloring = Array(numVertices).fill(-1);

    function isSafe(vertex, color) {
        for (const neighbor of graph[vertex]) {
            if (coloring[neighbor] === color) {
                return false;
            }
        }
        return true;
    }

    function backtrack(vertex) {
        if (vertex === numVertices) {
            return true;  // All vertices are colored
        }
        for (const color of colors) {
            if (isSafe(vertex, color)) {
                coloring[vertex] = color;
                if (backtrack(vertex + 1)) {
                    return true;
                }
                coloring[vertex] = -1;  // Backtrack
            }
        }
        return false;
    }

    if (backtrack(0)) {
        return coloring;
    } else {
        return "No valid coloring exists";
    }
}

// Example usage:
const graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
};
const colors = ['red', 'green', 'blue'];
console.log(graphColoring(graph, colors));
