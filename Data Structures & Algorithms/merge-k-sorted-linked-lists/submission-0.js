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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null;

        return this.divide(lists, 0, lists.length - 1);
    }


    divide(lists, l, r) {
       if(l > r) {
        return null;
       }

       // Base case where there is only one list
       if( l === r) {
        return lists[l];
       }

       let mid = Math.floor((l + r) / 2);


       let list1 = this.divide(lists, l, mid);
       let list2 = this.divide(lists , mid + 1, r);


       return this.conquer(list1, list2);
    }

    conquer(list1, list2) {
        let dummy = new ListNode(0);
        let curr = dummy;

        while(list1 && list2) {
            if(list1.val <= list2.val) {
                curr.next = list1;
                list1 =list1.next 
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        curr.next = list1 ? list1 : list2;

        return dummy.next;
    }
}
