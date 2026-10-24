class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        ## I can use a two pointer approach with the left starting
        ## at the first index and the second starting at the next index
        ## I will slowly move the left pointer up and the next pointer will 
        ## Iterate through all the other values replacing its value initially with the next then comparing if the value is greater before comparing all the others

        left = 0

        while (left < len(arr) - 1):
            if (left + 1) < len(arr):
              arr[left] = arr[left + 1]

            for i in range(left + 1, len(arr)):
                if arr[left] < arr[i]:
                    arr[left] = arr[i]
            
            left += 1
        
        arr[-1] = -1
        
        return arr