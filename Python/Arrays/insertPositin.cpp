#include <iostream>
#include <vector>

int insertPosition(std::vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;

    while (l <= r) {
        int mid = (l + r) / 2;
        // if we find the element
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

int main() {
    std::vector<int> nums = {1, 3, 5, 6};
    int target = 2;

    int index = insertPosition(nums, target);
    std::cout << "Index to insert " << target << " in " << nums.size() << " sized vector: " << index << std::endl;

    return 0;
}
