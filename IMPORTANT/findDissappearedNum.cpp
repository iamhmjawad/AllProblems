#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

vector<int> findDisappearedNumbers(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    vector<int> missingNums;

    for (int i = 1; i <= nums.size(); i++) {
        // If numSet.find(i) returns numSet.end(), it means that the integer i is not present in the numSet container.
        if (numSet.find(i) == numSet.end()) {
            missingNums.push_back(i);
        }
    }

    return missingNums;
}

int main() {
    vector<int> nums = {4, 3, 2, 7, 8, 2, 3, 1};
    vector<int> missingNums = findDisappearedNumbers(nums);

    for (int num : missingNums) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
