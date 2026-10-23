class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ## I can solve this with one pass 
        ## Initialize a buy variable with the first index value
        ## With each iteration
        ## Check if the current num is less than the buy value
        ## if so replace buy with that
        ## if higher then set it as the sell value

        if len(prices) == 1:
          return 0

        max_profit = 0

        for i in range(len(prices)):

            for j in range(i + 1, len(prices)):
              current_profit = prices[j] - prices[i]

              if current_profit > max_profit:
                max_profit = current_profit
        
        return max_profit