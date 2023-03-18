/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let alpha = coordinates[0]
    let num = coordinates[1]

    if (alpha == 'a' || alpha == 'c' || alpha == 'e' || alpha == 'g')
        return num % 2 == 0
    else
        return num % 2 == 1
};