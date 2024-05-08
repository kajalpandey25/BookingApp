
// Depth-First Search (DFS) is a graph traversal algorithm that systematically explores the vertices (nodes) of a graph in a depthward motion, visiting as far as possible along each branch before backtracking. It's called "depth-first" because it systematically explores each branch to its deepest level before moving to the next branch.

// Here's a simplified step-by-step explanation of how DFS works:

// 1. Start at a Source Node:
// Choose a starting node in the graph as the source node.
// Mark the source node as visited.

// 2. Explore Neighbors Depth-First:
// Explore one of the unvisited neighbors of the current node.
// If there are multiple unvisited neighbors, choose one arbitrarily.
// Repeat this process recursively for the chosen neighbor until all neighbors are visited.

// 3. Backtrack:
// If there are no unvisited neighbors, backtrack to the previous node and explore its unvisited neighbors.
// Continue this process until all nodes are visited or there are no more nodes to explore.

// 4. Keep Track of Visited Nodes:
// Maintain a data structure (often a set or array) to keep track of visited nodes to avoid revisiting already visited nodes and to handle cycles in the graph.

// Suppose we have the following graph represented as an adjacency list:
// graph = {
//     'A': ['B', 'C'],
//     'B': ['D', 'E'],
//     'C': ['F'],
//     'D': [],
//     'E': ['F'],
//     'F': []
// }


// This graph consists of six nodes: A, B, C, D, E, and F, with edges connecting them as shown.

// Now, let's perform DFS starting from node 'A':

// Start at Node 'A':
// Start DFS from node 'A' and mark it as visited.
// Visit Neighbors Depth-First:
// From 'A', explore one of its unvisited neighbors depth-first. Let's choose 'B'.
// Visit node 'B' and mark it as visited.
// Continue Depth-First Exploration:
// From 'B', explore one of its unvisited neighbors depth-first. Let's choose 'D'.
// Visit node 'D' and mark it as visited.
// Node 'D' has no unvisited neighbors, so backtrack to node 'B'.
// Backtrack and Explore More:
// From 'B', explore another unvisited neighbor depth-first. Let's choose 'E'.
// Visit node 'E' and mark it as visited.
// From 'E', explore its unvisited neighbor depth-first. Let's choose 'F'.
// Visit node 'F' and mark it as visited.
// Node 'F' has no unvisited neighbors, so backtrack to node 'E'.
// Node 'E' has no more unvisited neighbors, so backtrack to node 'B'.
// Backtrack Again:
// Node 'B' has no more unvisited neighbors, so backtrack to node 'A'.
// Explore Remaining Unvisited Neighbors:
// From 'A', explore its remaining unvisited neighbor depth-first. Let's choose 'C'.
// Visit node 'C' and mark it as visited.
// From 'C', explore its unvisited neighbor depth-first. Let's choose 'F'.
// Node 'F' has already been visited, so no further exploration from 'C'.
// Finish DFS:
// Node 'C' has no more unvisited neighbors, so backtrack to node 'A'.
// Node 'A' has no more unvisited neighbors, so DFS traversal is complete.
// The order of node visits during this DFS traversal is: A, B, D, E, F, C.
// the time complexity of DFS is O(V + E).

// Function to perform Depth-First Search (DFS)
function dfs(graph, node, visited) {
    // Mark the current node as visited
    visited.add(node);
    console.log(node); // Output the current node (or do any other processing)

    // Visit all adjacent nodes of the current node recursively
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Example usage:
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

const visited = new Set(); // Set to keep track of visited nodes
dfs(graph, 'A', visited);
