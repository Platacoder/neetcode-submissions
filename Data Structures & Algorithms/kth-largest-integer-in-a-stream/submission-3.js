class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.k = k;
      this.minHeap = [];

      // Build you minHeap here with the help of the add function. This function will the top k
      // elements.
       for(let num of nums) {
        this.add(num);
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if(this.minHeap.length < this.k) {
            this.minHeap.push(val);
            let i = this.minHeap.length - 1;
            // If there are values to compare. Then bubble up.
            while(i > 0 && this.minHeap[i] < this.minHeap[Math.floor((i - 1)/2)]){
                let temp = this.minHeap[i];
                this.minHeap[i] = this.minHeap[Math.floor((i - 1)/2)];
                this.minHeap[Math.floor((i - 1)/2)] = temp;
                i = Math.floor((i - 1)/2);
            }
        } else if(val > this.minHeap[0]) {
           // If the value added is greater than the most minimum value
           // Then just replace it and perculate down if needed
            this.minHeap[0] = val;
            let i = 0;
           while(true) {
            let length = this.minHeap.length;
            let leftIndex =  i * 2 + 1;
            let rightIndex = i * 2 + 2;
            
            if(
                rightIndex < length && 
                this.minHeap[rightIndex] < this.minHeap[leftIndex] &&
               this.minHeap[rightIndex] < this.minHeap[i]) {
                // Replace with right child
                let tmp = this.minHeap[i];
                this.minHeap[i] = this.minHeap[rightIndex];
                this.minHeap[rightIndex] = tmp;
                i = rightIndex;
            } else if (this.minHeap[i] > this.minHeap[leftIndex]){
                // Replace with left child
                let tmp = this.minHeap[i];
                this.minHeap[i] = this.minHeap[leftIndex];
                this.minHeap[leftIndex] = tmp;
                i = leftIndex;
            } else {
                break;
            }
           }
        }
        return this.minHeap[0];
    }
}
