global.print = function (s) {
    process.stdout.write(s)
}
global.c = function (s) {
    console.log(s)
}

function rhombus(n) {
    for (let i = 0; i < n; i++) {
        // can prevent this -1 if we start loops with 1 instead of 0
        for (let j = 0; j < (n - i) - 1; j++) {
            print(' ')
        }
        for (let k = 0; k < n; k++) {
            print('*')
        }
        c('')
    }
}

rhombus(5)

