function fibonacci(n) {
    var a = 1,
        b = 1;
    if (n > 0) {
        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
        }
        return b;
    } else if (n < 0) {
        a = -1;
        b = -1;
        for (i = -3; i >= n; i--) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    } else {
        return 0;
    }
}

console.log(fibonacci(process.argv[2]));