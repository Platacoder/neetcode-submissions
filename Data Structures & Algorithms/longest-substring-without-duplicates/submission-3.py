class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:


        if (len(s) == 1):
            return 1

        if len(s) == 0:
            return 0

        p1, p2, max_length = 0, 1, 0,
        dups = set()
        dups.add(s[p1])

        while p2 < len(s):
            if s[p2] in dups:
                dups.remove(s[p1])
                p1 += 1

            else:
                dups.add(s[p2])
                p2 += 1
                max_length = max(max_length, p2 - p1)

        return max_length

        
        