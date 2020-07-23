function semiPerimeter(a, b, c) {
    return (a + b + c) / 2
}

function area(a, b, c) {
    var s = semiPerimeter(a, b, c);
    return s * (s - a) * (s - b) * (s - c);
}