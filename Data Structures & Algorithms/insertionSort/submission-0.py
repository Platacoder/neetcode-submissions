# Definition for a pair.
# class Pair:
#     def __init__(self, key: int, value: str):
#         self.key = key
#         self.value = value
class Solution:
    def insertionSort(self, pairs: List[Pair]) -> List[List[Pair]]:
        # do insertion sort by the key
        # iterate each pair's first value starting from the second position
        # compare the keys and sort them by doing insertion sort
        # each iteration of the list, push that list into the result
        # at the end of the loop, return the result
        res = []
        for i in range(len(pairs)):
            j = i - 1
            while j >= 0 and pairs[j + 1].key < pairs[j].key:
                temp = pairs[j + 1]
                pairs[j + 1] = pairs[j]
                pairs[j] = temp
                j -= 1
            res.append(pairs[:])
        return res
