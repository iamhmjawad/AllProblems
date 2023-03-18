/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    
    let slow = head
    let fast = head

    var hasCycle = function (head) {
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next;
            if (slow === fast) {
                return true
            }
        }
        return false;
    };

    // if no cycle present
    let cyclePresent = hasCycle(head)
    if (!cyclePresent) return null;
    // REMEMBER: fast pointer is present there where it met slow in hasCycle function.
    // updating the position of slow pointer
    slow = head
    while (slow != fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
