class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None

# to print linked list


def printList(node):
    while node:
        print(node.val, end=' ')
        node = node.next
    # print()

# creating a lInked list


def createLinkedList(lst):
    dummy = Node()
    tail = dummy
    for val in lst:
        tail.next = Node(val)
        tail = tail.next
    return dummy.next


def reverse(head):
    pre, curr = None, head

    while curr:
        temp = curr.next
        curr.next = pre
        pre = curr
        curr = temp

    return pre


l1 = createLinkedList([1, 2, 4])
printList(reverse(l1))
