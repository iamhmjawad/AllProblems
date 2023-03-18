global.print = function (s) {
    process.stdout.write(s)
}
global.c = function (s) {
    console.log(s)
}

function printInvertedPattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            print(j + " ")
        }
        c("")
    }
}

printInvertedPattern(5)
