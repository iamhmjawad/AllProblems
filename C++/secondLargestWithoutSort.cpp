#include <iostream>
#include <string>
using namespace std;

int secondLargest(int arr[], int size) {
    int max = 0;
    int secondMax = 0;
    for (int i = 0; i < size; i++) {
        int current = arr[i];
        if (current > max) {
            secondMax = max;
            max = current;
        } else if (current > secondMax && current < max) {
            secondMax = current;
        }
    }
    return secondMax;
}

int main() {
    int size = 5;
    int arr[size] = {34, 223, 43, 11, 5};

    cout << secondLargest(arr, size);
    return 0;
}