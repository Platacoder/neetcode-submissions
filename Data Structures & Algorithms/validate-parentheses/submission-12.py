class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False
        
        stack = []
        mp = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for char in s:
            if char in mp:
                  if len(stack) > 0 and stack[-1] == mp[char]:
                      stack.pop()
                  else:
                    return False
            else:
                stack.append(char)
        return len(stack) == 0
        