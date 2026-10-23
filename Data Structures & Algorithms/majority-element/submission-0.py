class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        ## Obtain the frequencies of all the numbers and store in a hash
        hash = {}

        for num in nums:
            hash[num] = hash.get(num , 0) + 1

        ## Iterate through the hash find the frequency that is greater than n/2

        res = 0
        
        for key in hash:
            if hash[key] > (len(nums) // 2):
                res = key
        
        return res
        
