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
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = new Queue();
        let result = [];
        if(!root) return [];
        else queue.push(root);


        while(!queue.isEmpty()) {
            let rightSide = null;
            let levelLength = queue.size();
            
            for(let i = 0; i < levelLength; i++) {
                let curr = queue.pop();
                
                if(curr) {
                    rightSide = curr;
                    queue.push(curr.left)
                    queue.push(curr.right)
                }
            }
            if (rightSide) {
                result.push(rightSide.val);
            }
        }
        return result;
    }
}
