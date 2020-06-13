var numbers = [100, 24, 53, 78, 999, 91, 1, 12]
var minNumber = numbers[0]

document.write("<p><br><br><br><br>Task 9:</p><br>")
document.write(numbers);
for (i = 0; i < numbers.length; i++) {
    if (minNumber > numbers[i + 1]) {
        minNumber = numbers[i + 1];
    }
}
document.write("<br><br> The smallest number is " + minNumber);