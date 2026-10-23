class Solution:
    def isValid(self, s: str) -> bool:
        dic = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        stack = []
        for char in s:
            if char not in dic:
                stack.append(char)
                continue
            if not stack or dic[char] != stack[-1]:
                return False
            stack.pop()
        return not stack