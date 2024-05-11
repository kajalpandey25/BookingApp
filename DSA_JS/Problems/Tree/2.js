// An AVL tree, named after its inventors Adelson-Velsky and Landis, is a self-balancing binary search tree. In an AVL tree, the heights of the two child subtrees of any node differ by at most one.

// Maintaining this balance ensures that the height of the tree remains logarithmic, which is crucial for efficient search, insertion, and deletion operations. When an insertion or deletion disrupts the balance of the tree, rotations are performed to restore the AVL property.

// AVL trees are widely used in computer science and are one of the most popular types of self-balancing binary search trees due to their efficient operations. They are particularly useful in scenarios where a large amount of dynamic data needs to be stored and efficiently accessed.
// Note=>
    // balance factor = heigth of left subtree - heigth of right subtree
// bf = hl-hr = {-1, 0 ,1}
// |bf| = |hl-hr|<= 1


// Sure, let's consider an example of inserting elements into an AVL tree:

// Suppose we want to insert the following elements into an AVL tree: 10, 5, 15, 3, 8, 12, 17.

// 1. Insert 10: We start with an empty tree, so the first insertion creates the root node with the value 10.
// 2. Insert 5: Inserting 5 as the left child of 10 doesn't violate the AVL property.
// 3. Insert 15: Inserting 15 as the right child of 10 doesn't violate the AVL property.
// 4. Insert 3: Inserting 3 as the left child of 5 violates the AVL property. We need to perform rotations to rebalance the tree.
// After performing the necessary rotations (a right rotation), the tree becomes:
// 5. Insert 8: Inserting 8 as the right child of 5 doesn't violate the AVL property.
// 6. Insert 12: Inserting 12 as the right child of 15 doesn't violate the AVL property.
// 7. Insert 17: Inserting 17 as the right child of 12 violates the AVL property. Again, we need to perform rotations to rebalance the tree.
// After performing necessary rotations (a left rotation followed by a right rotation), the tree becomes:

//   10
// /    \
// 5     15
// / \    / \
// 3   8  12 17
