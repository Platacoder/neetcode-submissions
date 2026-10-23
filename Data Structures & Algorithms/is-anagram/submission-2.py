class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False
        
        d1 = {}


        for i in range(len(s)):
         d1[s[i]] = d1.get(s[i], 0) + 1

        
        for j in range(len(t)):
          if t[j] not in d1:
            return False
          d1[t[j]] -= 1

        return all(value == 0 for value in d1.values())