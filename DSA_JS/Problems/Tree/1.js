// Binary search tree (BST) is a data structure that allows for efficient searching, insertion, and deletion of elements. It is organized in a hierarchical manner where each node has at most two children, referred to as the left child and the right child.

// The main property of a binary search tree is that for any given node:

// 1. All elements in the left subtree are less than the node's value.
// 2. All elements in the right subtree are greater than the node's value.

// This property allows for efficient searching within the tree. The basic algorithms associated with binary search trees include:

// 1. Search: To find a particular element in the tree, start at the root and recursively search either the left or right subtree based on whether the target value is less than or greater than the current node's value until the target is found or the subtree is empty.

// 2. Insertion: To insert a new element into the tree, start at the root and recursively traverse the tree, moving left or right based on whether the new element is less than or greater than the current node's value until reaching an empty spot where the new element can be inserted as a leaf.

// 3. Deletion: Deleting a node from a binary search tree is more complex because it involves maintaining the BST property after deletion. There are several cases to consider:
// If the node to be deleted has no children, simply remove it from the tree.
// If the node has one child, replace it with its child.
// If the node has two children, find either the maximum node in its left subtree (the predecessor) or the minimum node in its right subtree (the successor), replace the node to be deleted with the predecessor or successor, and then delete the predecessor or successor from its original position.

// Example=>
    class Node {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    
    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
    
        insert(value) {
            const newNode = new Node(value);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }
    
        insertNode(node, newNode) {
            if (newNode.value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }
    
        // Utility method to perform inorder traversal
        inorder(node) {
            if (node !== null) {
                this.inorder(node.left);
                console.log(node.value);
                this.inorder(node.right);
            }
        }
    }
    
    // Example usage
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(2);
    bst.insert(4);
    bst.insert(7);
    bst.insert(9);
    bst.insert(1);
    
    // Print inorder traversal
    console.log("Inorder traversal:");
    bst.inorder(bst.root);
    
