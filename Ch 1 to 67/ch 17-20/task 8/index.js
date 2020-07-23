var numbers = [1, 100, 24, 53, 78, 999, 91, 12]
var maxNumber = numbers[0]

document.write("<p><br><br><br><br>Task 8:</p><br>")
document.write(numbers);
for (i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i + 1]) {
        maxNumber = numbers[i + 1];
    }
}
document.write("<br><br> The largest number is " + maxNumber);