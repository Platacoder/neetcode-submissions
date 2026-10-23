class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let s of strs) {
            let count = new Array(26).fill(0);

            for(let c of s) {
                count[c.charCodeAt(0)- 'a'.charCodeAt(0)] += 1;
            }
            // Creates the hash key based off the count of each character in the string.
            // Each anagram will have the same exact character counts. Which will allow us to group them
            // together
            const key = count.join(',');
            // Initialize a new array for that key if that current key does not exist.
            if(!res[key]) {
                res[key] = [];
            }
            // Push String as the value to that key.
            res[key].push(s);
        }
        return Object.values(res);
    }
}
