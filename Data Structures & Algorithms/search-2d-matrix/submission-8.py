class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # iterate through each list
        # do binary search for that list, continue until target is found


        for arr in matrix:
            left = 0
            right = len(arr) - 1
            print(arr)

            while left <= right:
                m = (left + right) // 2

                if target > arr[m]:
                    left = m + 1
                elif target < arr[m]:
                    right = m - 1
                else:
                    return True
        return False
                