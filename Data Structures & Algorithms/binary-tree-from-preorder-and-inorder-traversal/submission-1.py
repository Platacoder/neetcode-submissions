# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder and not inorder:
            return None

        #Take the first value of preorder since this will always be the parent root
        root = TreeNode(preorder[0])

        # Find the midpoint in the inorder tree since we know that all the values to the right and left 
        # are properly placed within the tree (left are less than root and right are greater than)
        mid = inorder.index(preorder[0])


        # do a recursive call to get the root value placed, while also finding the midpoint for the subtree
        root.left = self.buildTree(preorder[1 : mid + 1], inorder[:mid])

        # do another recursive call to the right side of the tree where you will check all the values in the right side of the subtree
        root.right = self.buildTree(preorder[mid + 1:], inorder[mid + 1 :])
        return root
        