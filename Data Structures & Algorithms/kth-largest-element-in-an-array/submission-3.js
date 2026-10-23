class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        this.heapify(nums);

        // Extracts the max number right up to the actual max we want to return
        // Stops short by 1
        for(let i = 0; i < k - 1; i++) {
            this.extractMax(nums);
        }


        return this.extractMax(nums);
    }

    heapify(arr) {
        let curr = Math.floor(arr.length / 2) - 1;
        while(curr >= 0) {
            this.bubbledown(arr, curr);
            curr--;
        }
    }

    bubbledown(arr, index) {
        while(true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;
            if(left < arr.length && arr[left] > arr[largest]) {
                largest = left;
            }
            if(right < arr.length && arr[right] > arr[largest]) {
                largest = right;
            }

            if(largest !== index) {
                let temp = arr[index];
                arr[index] = arr[largest];
                arr[largest] = temp;
                index = largest;
            } else {
                break;
            }
        }
    }

    extractMax(arr) {
        if (arr.length === 0) return undefined;

        let max = arr[0];

        if(arr.length === 1) {
            arr.pop();
        } else {
            arr[0] = arr.pop()
            this.bubbledown(arr, 0);
        }
        return max;
    }
}
