global.print = function (s) {
    process.stdout.write(s)
}
global.c = function (s) {
    console.log(s)
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            print(' ')
        }
        for (let j = 1; j <= i; j++) {
            print(j + ' ')
        }
        c('')
    }
}

pattern(5)