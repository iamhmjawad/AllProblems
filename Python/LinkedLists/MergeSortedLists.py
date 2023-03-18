class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None


def mergeTwoLists(l1, l2):
    dummy = Node()
    tail = dummy

    while l1 and l2:
        if l1.val <= l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next

    tail.next = l1 or l2

    return dummy.next

# to convert array to linked list


def createLinkedList(lst):
    dummy = Node()
    tail = dummy
    for val in lst:
        tail.next = Node(val)
        tail = tail.next
    return dummy.next


# to print linked list
def printList(node):
    while node:
        print(node.val, end=' ')
        node = node.next
    # print()


l1 = createLinkedList([1, 2, 4])
l2 = createLinkedList([1, 3, 4])
merged = mergeTwoLists(l1, l2)

printList(merged)
