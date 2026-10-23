class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if len(prices) == 1:
          return 0

        max_profit = 0
        min_buy_price = prices[0]

        for i in range(len(prices)):
           

            if prices[i] < min_buy_price:
                min_buy_price = prices[i]
            
            profit =  prices[i] - min_buy_price

            if profit > max_profit:
                max_profit = profit
           
        return max_profit