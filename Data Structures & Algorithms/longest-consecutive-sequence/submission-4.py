class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        max_length = 0

        if len(nums) == 0:
            return 0

        for num in s:
            current_num = num

            if (num - 1) in s:
                continue
            else:
                current_length = 1
                while(current_num + 1) in s:
                    current_num += 1
                    current_length += 1
                    continue
                if current_length > max_length:
                      max_length = current_length
                current_length = 0
               
        return max_length