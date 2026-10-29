class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ## We can set two pointers here a left that is the comparison pointer
        ## Then a right that iterates until we find a number higher than the left pointer
        ## Once found we get the days by getting the different of the right pointer index
        ## and the left pointer index. We keep the main loop going until it reaches the end.
        ## If the right pointer reaches the end then we set appended value to zero. All of
        ## these will be appended to an output array

        # Time complexity of O(n) space complexity of O(n)

        n = len(temperatures)
        res = [0] * n
        stack = []

        for i in range(n):
           
            while stack and temperatures[i] > temperatures[stack[-1]]:
                removed = stack.pop()
                res[removed] = i - removed

            stack.append(i)
        return res
        