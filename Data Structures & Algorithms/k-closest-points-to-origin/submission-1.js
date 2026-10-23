class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if(points.length === 1) return points;

        this.heapify(points);

        let result = [];

        for(let i = 0; i < k; i++) {
            result.push(this.extractMin(points));
        }

        return result;
    }

    heapify(arr) {
        let start = Math.floor(arr.length / 2) - 1;

        for(let i = start; i >= 0; i--) {
            this.bubbleDown(i, arr);
        }
    }

    getDistance(point) {
        return Math.pow(point[0], 2) + Math.pow(point[1], 2);
    }

    bubbleDown(index, arr) {
        while(true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;
            if(left < arr.length && this.getDistance(arr[left]) < this.getDistance(arr[smallest])
            ){
                smallest = left;
            } else if (
                right < arr.length && this.getDistance(arr[right]) < this.getDistance(arr[smallest])
            )
            {
                smallest = right;
            
            }
            
            if(smallest !== index) {
                let tmp = arr[index];
                arr[index] = arr[smallest];
                arr[smallest] = tmp;
                index = smallest;
                
            }else {
                break;
            }
        }
    }

    extractMin(arr) {
        if (arr.length === 0) return undefined;
        let min = arr[0];

        if (arr.length > 1) {
            arr[0] = arr.pop();
            this.bubbleDown(0, arr);
        } else {
            arr.pop();
        }

        return min;
    }
}
