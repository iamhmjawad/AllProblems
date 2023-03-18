global.print = function (s) {
    process.stdout.write(s)
}
global.c = function (s) {
    console.log(s)
}


function patterm(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            print(' ')
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            print('*')

        }
        c('')
    }


    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            print(' ')
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            print('*')

        }
        c('')
    }
}

patterm(4)