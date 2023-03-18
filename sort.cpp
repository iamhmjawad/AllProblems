#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

string alphabetSoup(string str) {
    sort(str.begin(), str.end());
    return str;
}
int main() {
    cout << alphabetSoup("huehue");
    return 0;
}