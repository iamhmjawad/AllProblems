// global.print = function (s) {
//     process.stdout.write(s)
// }
// global.c = function (s) {
//     console.log(s)
// }


function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if ((i + j) % 2 === 0) {
                process.stdout.write('1' + ' ')
            }
            else
                process.stdout.write('0' + ' ')
        }
        // adds the line
        console.log("")
    }
}

pattern(5)