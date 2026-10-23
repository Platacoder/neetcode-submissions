class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        let subset = [];
        this.dfs(nums, 0, subset, result,target);
        return result;
    }

    dfs(nums, i, subset, result, currentSum) {
        if(currentSum === 0) {
            result.push([...subset]);
        } else if (i >= nums.length || currentSum < 0) {
            return;
        } else {
            subset.push(nums[i]);
            this.dfs(nums, i, subset, result, currentSum - nums[i]);

            subset.pop(nums[i]);
            this.dfs(nums, i + 1, subset, result, currentSum);
        }
    }
}


