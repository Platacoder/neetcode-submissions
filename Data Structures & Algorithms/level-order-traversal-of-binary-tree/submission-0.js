/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        let queue = [];
        let levelArray = [];

        let level = 0;

        if(root) queue.push(root);

        while(queue.length > 0) {
            let levelLength = queue.length;
                levelArray = [];
            for(let i = queue.length; i > 0; i--) {
                let curr  = queue.shift();
                levelArray.push(curr.val);

                if (curr.left != null) {
                    queue.push(curr.left);
                } 
                
                if(curr.right != null) {
                    queue.push(curr.right);
                }
                
            } 
            result.push(levelArray);
        }
        return result;
    }
}
