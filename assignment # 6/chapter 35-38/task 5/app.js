function square() {
    var userInput = +prompt("Enter a number:");

    function square(userInput) {
        return userInput * userInput;
    }

    var res = square(userInput);

    alert("The square of " + userInput + " is " + res);
}

square();