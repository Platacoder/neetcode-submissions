/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       let previousNode = null;
       let currentNode = head;

       while(currentNode) {
        let futureNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = futureNode;
       }
       return previousNode;
    }
}
