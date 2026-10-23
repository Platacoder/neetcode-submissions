class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
     
        groupedD = {}

        for word in strs:
          dictionary = {}
          
          for char in word:
            dictionary[char] = dictionary.get(char, 0) + 1
          
          dToT = tuple(sorted(dictionary.items()))
          
          if dToT in groupedD:
            groupedD[dToT].append(word)
          else:
            groupedD[dToT] = [word]
          ## Clear dictionary to freshly compare the next string
        
        return list(groupedD.values())


