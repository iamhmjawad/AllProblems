#include <iostream>

struct Node {
    int data;
    struct Node* next;
};

Node* merge_lists(Node* list1, Node* list2) {
    if (!list1)
        return list2;
    if (!list2)
        return list1;

    // create dummy node
    Node* dummy = new Node();
    Node* tail = dummy;

    while (list1 && list2) {
        if (list1->data <= list2->data) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }

    // add remaining nodes
    if (list1)
        tail->next = list1;
    else
        tail->next = list2;

    // return sorted list from dummy node
    return dummy->next;
}

void print_list(Node* head) {
    while (head) {
        std::cout << head->data << " ";
        head = head->next;
    }
    std::cout << std::endl;
}

int main() {
    // create list 1
    Node* list1 = new Node();
    list1->data = 1;
    list1->next = new Node();
    list1->next->data = 3;
    list1->next->next = new Node();
    list1->next->next->data = 5;
    list1->next->next->next = nullptr;

    // create list 2
    Node* list2 = new Node();
    list2->data = 2;
    list2->next = new Node();
    list2->next->data = 4;
    list2->next->next = new Node();
    list2->next->next->data = 6;
    list2->next->next->next = nullptr;

    // merge the lists
    Node* merged_list = merge_lists(list1, list2);

    // print the merged list
    print_list(merged_list);

    return 0;
}
