class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isSubTree(self, s: TreeNode,t: TreeNode) -> bool:
    if not t: return True
    if not s: return False
    
    # if both s and t are same
    if isSameTree(s,t): return True
    
    # if not same, check if t is the subset of s's child (left and right)
    return (isSubTree(s, t.left) or (isSubTree(s, t.right)))

def isSameTree(self, t1, t2):
    if not t1 and not t2:
        return True
    
    if t1 and t2 and t1.val == t2.val:
        return ((self.isSameTree(t1.left, t2.left))and(self.isSameTree(t1.right, t2.right)))
    
    return False
