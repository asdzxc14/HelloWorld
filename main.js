var n = 8;
function print(n) {
    var i = 0;
    var j = 0;
    var s = "";
    for (i = 1; i <= n; i++) {
        s = "";
        for (j = 0; j < n - i; j++) {
            s += " ";
        }
        for (j = 0; j < 2 * i - 1; j++) {
            s += "*";
        }
        console.log(s);
    }
}
print(n);
