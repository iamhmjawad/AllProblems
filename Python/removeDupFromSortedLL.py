class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None

def createLinkedList(lst):
    dummy = Node()
    tail = dummy
    for val in lst:
        tail.next = Node(val)
        tail = tail.next
    return dummy.next

def printList(node):
    while node:
        print(node.val, end=' ')
        node = node.next
    # print()


def rmvDup(head):
    if not head:
        return head
    curr = head
    # do not use curr ever in cases where you have to compare values after the curr ends. like 
    # comparing the last value with the none. CRAPPYY ERRORRRRR!!!!
    while curr.next:
        if curr.val == curr.next.val:
            curr.next = curr.next.next
        else:
            curr = curr.next
    return head

    
    
    
l1 = createLinkedList([1,1,1, 2, 4])
printList(rmvDup(l1))

