/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var current = head;
    var previous = null;

    while (current) {
        if (current.val === val) {
            if (previous) {
                previous.next = current.next;
            } else {
                head = current.next;
            }
        } else {
            previous = current;
        }

        current = current.next;
    }

    return head;
};