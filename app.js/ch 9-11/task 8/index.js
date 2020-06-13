var num = 3;
for (var i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        continue;
    } else if (i % 3 === 0 || i % 5 === 0) {
        alert(i)
    }
}