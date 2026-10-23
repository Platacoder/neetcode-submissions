class MinHeap {
    constructor() {
        this.heap = [null];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while(i > 1 && this.heap[i] < this.heap[Math.floor(i/2)]) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[Math.floor(i/2)];
            this.heap[Math.floor(i/2)] = temp;
            i = Math.floor(i/2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.heap.length <= 1) return -1;
        if(this.heap.length === 2 ) return this.heap.pop();

        // Get minimum value in the heap
        // Also known as our result
        let result = this.heap[1];
        // Replace the minimum value with the last value and perculate down.
        this.heap[1] = this.heap.pop();
        let i = 1;
        while(2 * i < this.heap.length) {
            if(
                2 * i + 1 < this.heap.length &&
                this.heap[i] > this.heap[2 * i + 1] &&
                this.heap[2 * i] > this.heap[2 * i + 1]
              ){
                // Replace right child
                let temp = this.heap[i];
                this.heap[i] = this.heap[2 * i + 1];
                this.heap[2 * i + 1] = temp;
                i = 2 * i + 1;

            } else if (this.heap[i] > this.heap[2 * i]) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[2 * i];
                this.heap[2 * i] = temp;
                i = 2 * i;
            } else {
                break;
            }
        }
        return result;
    }

    /**
     * @return {number}
     */
    top() {
        if(this.heap.length <= 1) return -1;
        return this.heap[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = nums;
        this.heap.push(this.heap[0]);
        let curr = Math.floor((nums.length - 1) / 2);

        while(curr > 0) {
            let i = curr;
            while(2 * i < nums.length) {
                if(
                2 * i + 1 < this.heap.length &&
                this.heap[i] > this.heap[2 * i + 1] &&
                this.heap[2 * i] > this.heap[2 * i + 1]
              ){
                // Replace right child
                let temp = this.heap[i];
                this.heap[i] = this.heap[2 * i + 1];
                this.heap[2 * i + 1] = temp;
                i = 2 * i + 1;

            } else if (this.heap[i] > this.heap[2 * i]) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[2 * i];
                this.heap[2 * i] = temp;
                i = 2 * i;
            } else {
                break;
            }
            }
            curr--;
        }
        return;
    }
}
