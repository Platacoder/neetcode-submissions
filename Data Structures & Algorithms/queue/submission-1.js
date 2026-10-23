class ListNode {
    /**
     * @param {number} value The value to be stored in the node
     */
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        this.dummyHead = new ListNode(-1);
        this.dummyTail = new ListNode(-1);

        this.dummyHead.next =  this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.dummyHead.next === this.dummyTail;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new ListNode(value);
        newNode.prev = this.dummyTail.prev;
        newNode.next = this.dummyTail;
        this.dummyTail.prev.next = newNode;
        this.dummyTail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new ListNode(value);
        newNode.next = this.dummyHead.next;
        newNode.prev = this.dummyHead;
        this.dummyHead.next.prev = newNode;
        this.dummyHead.next = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.isEmpty()){
            return -1;
        } else {
            const nodeToRemove = this.dummyTail.prev;
            const newTailNode = this.dummyTail.prev.prev;
      
            this.dummyTail.prev = newTailNode;
            newTailNode.next = this.dummyTail;

            return nodeToRemove.value;
        }
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.isEmpty()){
            return -1;
        } else {
            const nodeToRemove = this.dummyHead.next;
            const newHeadNode = nodeToRemove.next;
            
            this.dummyHead.next = newHeadNode;
            newHeadNode.prev = this.dummyHead;

            return nodeToRemove.value;
        }
    }
}
