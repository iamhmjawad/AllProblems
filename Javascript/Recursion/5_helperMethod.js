// collecting all ods
const collectOdds = (nums) => {
    let result = []
    // creating a helper function
    const helper = (helperInput) => {
        // base case
        if (helperInput.length === 0) {
            return
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        // slicing very first element ( creating a subArray )
        helper(helperInput.slice(1))
    }
    helper(nums)
    return result
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));