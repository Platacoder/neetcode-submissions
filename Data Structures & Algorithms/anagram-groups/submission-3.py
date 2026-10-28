class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
     grouped = {}
     result = []

     ## Iterate through the array
     ## Collecting all of the different strings
     ## We will set the sorted string as the key and the actual string as the first member of
     ## a tuple. This way we are able to add anagrams to the proper key value

     ## After we collect all the anagrams and group them we then enumerate through each value in
     ## The dictionary, appending each tuple into its own array and then adding that array to the 
     ## Result array

     ## Time complexity is O(m*n log m) while space is O(n * m)

     for char in strs:
        key = "".join(sorted(char))

        if key not in grouped:
            grouped[key] = [char]
        else:
          grouped[key] = grouped.get(key, []) + [char]

     for key, value in grouped.items():
        return list(grouped.values())
    
