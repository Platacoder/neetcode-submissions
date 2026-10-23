class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleanS = "".join([char for char in s if char.isalnum()]).lower()

        if cleanS == "":
            return True

        p1 = 0;
        p2 = len(cleanS) - 1

        while p1 < p2:
          if cleanS[p1] != cleanS[p2]:
            return False

          p1 += 1
          p2 -= 1
        
        return True
          

        