class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    climbStairs(n) {

        const dfs = (i) => {
            if(i >= n) return i === n ? 1 : 0;
            return dfs(i + 2) + dfs(i + 1);
        }

        return dfs(0);
    }
}
