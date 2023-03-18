<!-- define array -->

int arr[5] = {1,2,3,4,5};
array<int,5> arr{ 1, 2, 3, 4, 5 }; <to use arr.size()>

<!-- for each element (can be string and array) -->

for(auto i: arr)

<!-- Methods -->

arr.size() // returns size of array
arr.empty() // returns true if array is empty
arr.front() // returns first element of array
arr.back() // returns last element of array
arr.begin() // returns iterator to first element of array
arr.end() // returns iterator to last element of array

<!-- to find array length -->

sizeof(arr)/sizeof(arr[0])
arr[0] is simply the first element of the array

we can explicitly type the type of the array like:
sizeof(arr)/sizeof(int)

<!-- #include<algorithms> -->

std::sort() - Sorts the elements of a container in ascending order.
std::reverse() - Reverses the order of the elements in a container.
std::rotate() - Rotates the elements of a container by a specified number of positions.
std::unique() - Removes consecutive duplicate elements from a container.
std::max() - Returns the maximum element in a container.
std::min() - Returns the minimum element in a container.
std::count() - Counts the number of occurrences of a specified element in a container.
std::find() - Searches for the first occurrence of a specified element in a container.
std::copy() - Copies elements from one container to another.
std::fill() - Assigns a specified value to all elements in a container.
