class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let countT = {};
        let countS = {};

        for (let i = 0; i < s.length; i++) {
            // Key is the current letter in the string.
            // For every letter we find we add plus one to the current count of that letter.
            countT[t[i]] = (countT[t[i]] || 0) + 1;
            countS[s[i]] = (countS[s[i]] || 0) + 1;
        }

        for(const count in countT) {
            if(countT[count] !== countS[count]) return false;
        }
        return true;
    }
}
