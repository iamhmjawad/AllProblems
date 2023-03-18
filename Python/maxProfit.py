def maxProfit(prices):
    # left ptr to buy and right ptr to sell
    left, right = 0, 1
    maxProfit = 0

    while right < len(prices):
        # if profitable
        if prices[left] < prices[right]:
            curProfit = prices[right] - prices[left]
            maxProfit = max(maxProfit, curProfit)
        else:
            # right is the lowset so
            left = right

        right += 1

    return maxProfit


print(maxProfit([7, 1, 5, 3, 6, 4]))
