function capitalizeWords (array) {
    // using a helper method
    let result = []
    function helper (helperInput) {
        // base case
        if (helperInput.length === 0) {
            return
        }
        // capitalize the first letter
        result.push(helperInput[0].toUpperCase())
        // slice the first element
        helper(helperInput.slice(1))
    }
    helper(array)
    return result
}

console.log(capitalizeWords('dsadasds'));