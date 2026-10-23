class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        let subset = [];
        this.dfs(nums, 0, subset, result);
        return result;
    }

     dfs(nums, i, subset, result) {
        if(i >= nums.length) {
            result.push([...subset]);
            return;
        }
        /**
         * We get to decide if we want to include the current element or not
         * 
         */
        // Include it
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, result);

        // Dont include it
        subset.pop(nums[i]);
        this.dfs(nums, i + 1, subset, result);

        return result;
    }
}
