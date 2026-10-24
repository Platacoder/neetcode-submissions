class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        maximum = -1
        for i in range(len(arr) - 1, -1, -1):
            if arr[i] > maximum:
                arr[i], maximum = maximum, arr[i]
            else:
              arr[i] = maximum
        
        arr[-1] = -1
        
        return arr