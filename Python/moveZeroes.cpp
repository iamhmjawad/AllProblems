#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(std::vector<int>& nums) {
    int n = nums.size();
    int l = 0;

    // Move all non-zero elements to the front
    for (int r = 0; r < n; r++) {
        if (nums[r] != 0) {
            nums[l++] = nums[r];
        }
    }

    // Fill the remaining elements with zeros
    while (l < n) {
        nums[l++] = 0;
    }
}

#include <iostream>
#include <string>
using namespace std;

int main() {
    std::vector<int> nums = {0, 1, 0, 3, 12};

    // Call the moveZeroes function to modify the input vector
    moveZeroes(nums);

    // Print the modified vector to the console
    for (int i = 0; i < nums.size(); i++) {
        std::cout << nums[i] << " ";
    }
    std::cout << std::endl;

    return 0;
    return 0;
}