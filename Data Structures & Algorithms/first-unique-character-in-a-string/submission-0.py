class Solution:
    def firstUniqChar(self, s: str) -> int:
        dic = {}

        for char in s:
            dic[char] = dic.get(char, 0) + 1

        for i in range(len(s)):
            if s[i] in dic and dic[s[i]] == 1:
                return i
        
        return -1
        

        