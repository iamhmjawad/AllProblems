# 235
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def LCA(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    curr = root

    while curr:
        if p.val > curr.val and q.val > curr.val:
            curr = curr.right

        if p.val < curr.val and q.val < curr.val:
            curr = curr.left

        else:
            return curr
