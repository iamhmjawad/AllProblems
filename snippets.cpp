#include <iostream>
#include <string>
using namespace std;

int main() {
    string cars[5] = {"Volvo", "BMW", "Ford", "Mazda", "Tesla"};
    int arr[5] = {10, 5, 33, 2, 1};

    for (int i = 0; i < sizeof(arr) / sizeof(int); i++) {
        cout << arr[i] << "\n";
    }
    return 0;
}