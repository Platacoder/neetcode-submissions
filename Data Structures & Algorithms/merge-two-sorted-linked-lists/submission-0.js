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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // This dummy node is needed as we need some base to create our merged list from.
        const dummyNode = {val: 0, next: null}
        let node = dummyNode;

        while(list1 && list2) {
            if(list1.val < list2.val) {
                node.next = list1;
                list1 = list1.next;
            } else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }

        if(list1) {
            node.next = list1;
        } else if (list2) {
            node.next = list2;
        }

        return dummyNode.next;

        // There are cases where one list is longer than the other.
        // In this case we can just link the remainder of the longer list to
        // the arranged list we are building


    }
}
