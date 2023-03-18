class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None


def printList(node):
    while node:
        print(node.val, end=' ')
        node = node.next


def createLinkedList(lst):
    dummy = Node()
    tail = dummy
    for val in lst:
        tail.next = Node(val)
        tail = tail.next
    return dummy.next


# Approach one, make an empty array and put all the ll elemetns there.
# then two ptrs, left and right, while left < right, compare and return True or False
# space complexity is linear though! To avoid it, use Approach 2 down below

def palindromeLL(head):
    # fast and low ptrs, when fast reaches end, slow is at the middle
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # now reverse the other half of ll starting from the middle or should I say, slow
    mid = slow
    temp = mid
    prev = None

    while mid:
        temp = mid.next
        mid.next = prev
        prev = mid
        mid = temp

    # Now its simple, like in array, we have two ptrs at start and and so we compare
    # prev is the last element in the ll, can be confirmed with compy and pencil!
    left, right = head, prev

    while right:
        if right.val != left.val:
            return False
        else:
            right = right.next
            left = left.next
    return True


l1 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1])
print(palindromeLL(l1))
