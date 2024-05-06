
// Breadth-First Search (BFS) is another graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It starts at a selected node (often referred to as the "source" or "root" node) and explores all of its neighbors at the present depth level before moving on to the nodes at the next depth level.

// Here's a simple explanation of how BFS works:

// 1. Start at the Source Node:
// -> Choose a starting node as the source node.
// -> Enqueue the source node into a queue data structure.
// -> Mark the source node as visited.

// 2. Explore Neighbors Level by Level:
// -> Dequeue a node from the front of the queue (the node visited first).
// -> Explore all unvisited neighbors of the dequeued node.
// -> Enqueue each unvisited neighbor into the queue.
// -> Mark each visited neighbor as visited.

// 3. Repeat Until Queue is Empty:
// -> Repeat steps 2 until the queue is empty, meaning all nodes reachable from the source node have been visited.

// example
// Graph:
// A -> B, C
// B -> D, E
// C -> F
// D -> 
// E -> F
// F -> 

// We want to perform a BFS traversal starting from node 'A'.

// Here's how BFS would proceed:

// 1. Start at the Source Node 'A':
// -> Enqueue 'A' into the queue.
// -> Mark 'A' as visited.

// 2. Explore Neighbors Level by Level:
// -> Dequeue 'A' from the queue and print it.
// -> Enqueue its neighbors 'B' and 'C' into the queue.
// -> Mark 'B' and 'C' as visited.

// 3. Continue Exploring:
// -> Dequeue 'B' from the queue and print it.
// -> Enqueue its neighbors 'D' and 'E' into the queue (if they are not visited).
// -> Mark 'D' and 'E' as visited.
// -> Dequeue 'C' from the queue and print it.
// -> Enqueue its neighbor 'F' into the queue (if it is not visited).
// -> Mark 'F' as visited.

// 4. Repeat Until Queue is Empty:
// -> Continue this process until the queue is empty.

// -> So, the BFS traversal sequence starting from node 'A' would be: A, B, C, D, E, F.
// The time complexity of Breadth-First Search (BFS) is O(V + E)
//  where V is the number of vertices (nodes) and E is the number of edges in the graph.


// Define a graph as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

// Function to perform Breadth-First Search (BFS)
function bfs(graph, start) {
    const visited = new Set(); // To keep track of visited nodes
    const queue = []; // Queue for BFS traversal

    queue.push(start); // Enqueue the start node
    visited.add(start); // Mark start node as visited

    while (queue.length !== 0) {
        const current = queue.shift(); // Dequeue the current node
        console.log(current); // Print the current node

        // Visit all unvisited neighbors of the current node
        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor); // Enqueue unvisited neighbor
                visited.add(neighbor); // Mark neighbor as visited
            }
        }
    }
}

// Example usage:
bfs(graph, 'A'); // Start BFS traversal from node 'A'
