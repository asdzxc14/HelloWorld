function get() {
    var n = 15;
    return n;
}
var x = get();
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
print(x);
