class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def invertBinTree(self, root: TreeNode) -> TreeNode:
    if not root:
        return None

    temp = root.left
    root.left = root.right
    root.right = temp

    self.invertBinTree(root.left)
    self.invertBinTree(root.right)

    return root
