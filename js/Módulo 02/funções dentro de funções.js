// Jeito fácil de entender.
/*
function addSquares1(a, b) {
    function square1(x) {
        return x*x;
    }

    let sqrA = square1(a);
    let sqrB = square1(b);
    return sqrA + sqrB;
}
*/
// Jeito PROFISSIONAL
function addSquares(a, b) {
    square = x => x * x;
    return square(a) + square(b)
}

console.log(addSquares(2, 3))