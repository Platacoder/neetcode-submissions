class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L = 0;
        let R = nums.length - 1;
        

        while(L <= R) {
            let M = Math.floor((L + R)/2);

            if(target < nums[M]){
                R = M - 1;

            } else if(target > nums[M]) {
                L = M + 1;
            } else {
                return M;
            }
        }
        return -1;
    }
}
