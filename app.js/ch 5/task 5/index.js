var myVar = 10;
var myString = "";
for (i = 1; i <= 10; i++) {
    myString += i + " x " + myVar + " = " + (i * myVar) + "<br/>";
}
document.write(myString);