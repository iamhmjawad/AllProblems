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


def removeElements(head, val):
    # just in case, the first elemt is the target element.
    # dummyNode.next will always return the new head in both cases
    dummyNode = Node(head.next)

    prev, curr = dummyNode, head

    while curr:
        if curr.val == val:
            prev.next = curr.next
            curr = curr.next
        else:
            prev = curr
            curr = curr.next

    return dummyNode.next


l1 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1])
printList(removeElements(l1, 1))
