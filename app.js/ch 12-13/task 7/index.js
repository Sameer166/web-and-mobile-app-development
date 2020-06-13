var userInput = +prompt("Task 7:\n\nEnter a time in 24 hour Clock format (0000 to 2359)");
var message;

if (userInput >= 0000 && userInput < 1200) {
    message = "Good morning.";
} else if (userInput >= 1200 && userInput < 1700) {
    message = "Good afternoon.";
} else if (userInput >= 1700 && userInput < 2100) {
    message = "Good evening.";
} else if (userInput >= 2100 && userInput <= 2359) {
    message = "Good night.";
} else {
    message = "invalid time entered.";
}

alert("Task 7:\n\n" + message);