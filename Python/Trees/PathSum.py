class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def hasPathSum(root, targetSum):
    # helper function to compare currsum with targetsum
    def dfs(node, currSum):
        if not node:
            return False
        currSum += node.val

        if not node.left and not node.right:
            return currSum == targetSum

        # call recursive on left and right, if any of them return true, means value exists
        return (dfs(node.left, currSum)) or (dfs(node.right, currSum))

    # call the helper function
    return dfs(root, 0)


root = TreeNode(5)
root.left = TreeNode(4)
root.right = TreeNode(8)
root.left.left = TreeNode(11)
root.left.left.left = TreeNode(7)
root.left.left.right = TreeNode(2)
root.right.left = TreeNode(13)
root.right.right = TreeNode(4)
root.right.right.right = TreeNode(1)

targetSum = 22
result = hasPathSum(root, targetSum)
print(result)
