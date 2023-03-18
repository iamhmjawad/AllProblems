#include <iostream>
#include <vector>

int removeDuplicates(std::vector<int>& nums) {
    int l = 1;

    for (int r = 1; r < nums.size(); r++) {
        if (nums[r] != nums[r - 1]) {
            nums[l++] = nums[r];
            // l++;
        }
    }
    return l;
}

int main() {
    std::vector<int> nums = {1, 1, 2, 2, 3, 4, 4, 5};
    int length = removeDuplicates(nums);

    // Print the unique elements of the vector
    for (int i = 0; i < length; i++) {
        std::cout << nums[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
