class CacheNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}



class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        // Map to keep track of values and their pointers.
        this.cache = new Map();
        // Creating and setting two dummy nodes
        // These are needed so that we immediately know what our
        // least and most used recent keys are.
        this.left = new CacheNode(0,0);
        this.right = new CacheNode(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)) {
            let node = this.cache.get(key);
            // Update key usage to the rightmost section
            // of the doubly linked list.
            this.remove(node);
            this.insert(node);
            return this.cache.get(key).val;
        }

        return - 1;
    }

    /**
     * Remove left most node, or head.
     * We do this by removing the node from in bewetween its
     * adjacent nodes.
     */
    remove(node) {
        let prev = node.prev, nxt = node.next;
        prev.next = nxt, nxt.prev = prev;
    }

    /**
     * Insert from right, or tail.
     */
    insert(node) {
       let prev = this.right.prev, nxt = this.right;
       prev.next = node, nxt.prev = node;
       node.next = nxt, node.prev = prev;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        let newNode = new CacheNode(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);
        // If our cache size becomes greater than our capacity.
        // Then remove the least recently used key.
        if(this.cache.size > this.capacity) {
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
