#include <iostream>
#include <string>
using namespace std;

// void noOdds(int arr[10]){}
void noOdds(int arr[], int size) {
    cout << "After Removing ODD elements, Remaining elements are!\n";

    for (int i = 0; i < size; i++) {
        if (arr[i] % 2 == 0) {
            cout << arr[i] << endl;
        }
    }
}

int main() {
    int arr[10] = {0};
    cout << "Enter 10 array Elements, seperting by Space!\n";

    for (int i = 0; i < 10; i++) {
        cin >> arr[i];
    }

    noOdds(arr, 10);

    return 0;
}