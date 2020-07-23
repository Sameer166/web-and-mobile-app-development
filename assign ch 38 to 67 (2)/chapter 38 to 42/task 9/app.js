function overTimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    } else {
        return 0;
    }
}
var hoursWorked = prompt("Enter number of hours worked");
alert("Your overtime pay is " + overTimePay(hoursWorked));