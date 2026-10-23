class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if(stones.length === 1) return stones[0];

        this.heapify(stones);

        while (stones.length > 1) {
            let y = this.extractMax(stones); // Heaviest stone
            let x = this.extractMax(stones); // Second heaviest

            if (y > x) {
                this.insert(stones, y - x);
            }
        }
        return stones.length === 1 ? stones[0] : 0;
    }

    /** Heapify the array in O(n) time */
    heapify(arr) {
        let start = Math.floor(arr.length / 2) - 1;
        for (let i = start; i >= 0; i--) {
            this.bubbleDown(i, arr);
        }
    }

    /** Extract the max element (root of the heap) */
    extractMax(arr) {
        if (arr.length === 0) return 0; 

        let max = arr[0];
        if (arr.length > 1) {
            arr[0] = arr.pop(); 
            this.bubbleDown(0, arr);
        } else {
            arr.pop();
        }
        return max;
    }

    /** Insert a new value into the heap */
    insert(arr, value) {
        arr.push(value);
        this.bubbleUp(arr.length - 1, arr);
    }

    /** Bubble down to maintain heap property */
    bubbleDown(index, arr) {
        let n = arr.length;
        while (index * 2 + 1 < n) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let largest = left;

            if (right < n && arr[right] > arr[left]) {
                largest = right;
            }
            if (arr[index] >= arr[largest]) {
                break;
            }

            [arr[index], arr[largest]] = [arr[largest], arr[index]];
            index = largest;
        }
    }

    /** Bubble up when inserting a new element */
    bubbleUp(index, arr) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (arr[index] <= arr[parent]) {
                break;
            }
            [arr[index], arr[parent]] = [arr[parent], arr[index]];
            index = parent;
        }
    }
}
