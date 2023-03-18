#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

struct ListNode {
    int val;
    struct ListNode* next;
};

ListNode* deleteDuplicates(ListNode* head) {
    if (!head) {
        return nullptr;
    }

    std::unordered_set<int> seen;
    ListNode* prev = nullptr;
    ListNode* curr = head;

    while (curr) {
        if (seen.count(curr->val)) {
            prev->next = curr->next;
            delete curr;
            curr = prev->next;
        } else {
            seen.insert(curr->val);
            prev = curr;
            curr = curr->next;
        }
    }

    return head;
}

// Printing the linked list ( Output )
void printList(ListNode* head) {
    while (head != NULL) {
        cout << head->val << " ";
        head = head->next;
    }
}

int main() {
    /* Initialize nodes */
    struct ListNode* head;
    struct ListNode* one = NULL;
    struct ListNode* two = NULL;
    struct ListNode* three = NULL;
    struct ListNode* four = NULL;
    struct ListNode* five = NULL;
    struct ListNode* six = NULL;
    struct ListNode* seven = NULL;

    /* Allocate memory */
    one = new ListNode;
    two = new ListNode;
    three = new ListNode;
    four = new ListNode;
    five = new ListNode;
    six = new ListNode;
    seven = new ListNode;

    /* Assign data values */
    one->val = 1;
    two->val = 1;
    three->val = 2;
    four->val = 3;
    five->val = 7;
    six->val = 1;
    seven->val = 6;

    /* Connect nodes */
    one->next = two;
    two->next = three;
    three->next = four;
    four->next = five;
    five->next = six;
    six->next = seven;
    seven->next = NULL;

    /* Save address of first node in head */
    head = one;

    deleteDuplicates(head);
    printList(head);

    return 0;
}