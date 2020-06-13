var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
var merge = b.concat(a);
var merge = [...new set(merge)];
document.write(merge);
document.write("counting");
for (i = 1; i <= 15; i++)
    document.write(+i + " ");

document.write("Reverse Counting");
for (i = 10; i >= 1; i--)
    document.write(+i + " ");