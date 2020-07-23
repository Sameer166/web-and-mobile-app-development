function calculator() {
    var num1 = +prompt("Enter number 1:");
    var opr = prompt("Enter an operator:");
    var num2 = +prompt("Enter number 2:");

    function calculator(num1, opr, num2) {
        if (opr === "+") {
            return (num1 + num2);
        } else if (opr === "-") {
            return (num1 - num2);
        } else if (opr === "*") {
            return (num1 * num2);
        } else if (opr === "/") {
            return (num1 / num2);
        }
    }

    var res = calculator(num1, opr, num2);

    alert("Calculator");
    alert(num1 + " " + opr + " " + num2 + " = " + res);
}

calculator();