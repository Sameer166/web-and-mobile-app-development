var number = Math.ceil(Math.random() * 10);
var userInput = +prompt("Enter number between 1 to 10:");

if (number === userInput) {
    alert("Congratulation");
} else {
    alert("Try again");
}