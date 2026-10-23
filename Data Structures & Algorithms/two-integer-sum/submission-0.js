class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        if(nums.length === 2) return [0,1];
        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if(map.has(difference)) {
                let j = map.get(difference);
                return [j,i]
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
