var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    ["a", "b", "c", "d"]
];

document.write("<p><br><br><br><br>Task 1 & 2:</p><br>")
for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}