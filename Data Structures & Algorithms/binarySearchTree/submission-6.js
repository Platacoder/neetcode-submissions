class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}




class TreeMap {
     constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        let newNode = new TreeNode(key, val);

        if(!this.root) {
            this.root = newNode;
            return;
        } 

        let curr = this.root;
        while(true) {
            if(key > curr.key) {
                if(!curr.right){
                    curr.right = newNode;
                    return;
                } 
                curr = curr.right;
            }
            else if(key < curr.key) {
                if(!curr.left){
                    curr.left = newNode;
                    return
                } 
                curr = curr.left;
            } else {
                // Covers the case of if we find a node that already has the same key
                // We just override the value and keep the key.
                curr.val = val;
                return;
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let curr = this.root;
        while(curr) {
            if(key > curr.key) {
                curr = curr.right;
            }
            else if(key < curr.key) {
                curr = curr.left;
            } else {
                return curr.val;
            }
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        let curr = this.root;

        while(curr && curr.left) {
            curr = curr.left;
        }
        return curr ? curr.val : -1;
    }

    /**
     * @returns {number}
     */
    getMax() {
        let curr = this.root;

        while(curr && curr.right) {
            curr = curr.right;
        }
        return curr ? curr.val : -1;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root, key);
    }

    /**
     * Removes the node with the specific key
     * and returns the new root of the subtree.
     */
    removeHelper(node, key) {
        if(!node) return null;

        if(key > node.key) {
            node = this.removeHelper(node.right, key);
        } else if(key < node.key) {
            node = this.removeHelper(node.left, key);
        } else {
            /**
             * Now we work to delete this node.
             * We have three cases but can be group into 2.
             * 1. Node to delete has 0 or 1 child.
             * 2. Node to delete has 2 childs.
             */

            if(!node.right) {
                return node.left;
            }
            else if (!node.left) {
                return node.right;
            } else {
                let minNode = this.findMinNode(node.right);
                node.val = minNode.val;
                node.key = minNode.key;
                node.right = this.removeHelper(node.right, minNode.key);
            }
        }
        return node;
    }

    findMinNode(root) {
        let curr = root;

        while(curr.left && curr.left) {
            curr = curr.left;
        }

        return curr;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        let resultArray = [];
        this.inorderTraverse(this.root, resultArray);
        return resultArray;
    }

    /**
     * Recursive function that populates an array that contains the keys of the tree
     * in ascending order.
     */
    inorderTraverse(root, array) {
        if(!root) return;
        this.inorderTraverse(root.left, array);
        array.push(root.key);
        this.inorderTraverse(root.right, array)
    }
}
