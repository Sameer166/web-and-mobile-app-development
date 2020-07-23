var colorsA = ["red", "green", "brown", "orange"];
var userInputBegn = prompt("\nTask 9(a):\n\n" + colorsA + "\nEnter a color that you want to add in the beginning.");


document.write("<p><br><br><br><br>Task 9(a):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsA);

document.write("<br>Array after upadte:<br>");
colorsA.unshift(userInputBegn);
document.write(colorsA);

var colorsB = ["red", "green", "brown", "orange"];
var userInputEnd = prompt("\nTask 9(b):\n\n" + colorsB + "\nEnter a color that you want to add in the end.");

document.write("<p><br><br><br><br>Task 9(b):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsB);

document.write("<br>Array after upadte:<br>");
colorsB.push(userInputEnd);
document.write(colorsB);

var colorsC = ["red", "green", "brown", "orange"];
var userInput1 = prompt("\nTask 9(c):\n\n" + colorsC + "\nEnter first color that you want to add in the begning.");
var userInput2 = prompt("\nTask 9(c):\n\n" + colorsC + "\nEnter second color that you want to add in the begning.");

document.write("<p><br><br><br><br>Task 9(c):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsC);

document.write("<br>Array after upadte:<br>");
colorsC.unshift(userInput1, userInput2);
document.write(colorsC);

var colorsD = ["red", "green", "brown", "orange"];

document.write("<p><br><br><br><br>Task 9(d):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsD);

document.write("<br>Array after upadte:<br>");
colorsD.shift();
document.write(colorsD);

var colorsE = ["red", "green", "brown", "orange"];

document.write("<p><br><br><br><br>Task 9(e):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsE);

document.write("<br>Array after upadte:<br>");
colorsE.pop();
document.write(colorsE);

var colorsF = ["red", "green", "brown", "orange"];
var userAddArrayIndex = +prompt("\nTask 9(f):\n\n" + colorsF + "\nEnter the position number where you want to add a color.");
var userInput1 = prompt("\nTask 9(f):\n\n" + colorsF + "\nEnter first color that you want to add in the begning.");

document.write("<p><br><br><br><br>Task 9(f):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsF);

document.write("<br>Array after upadte:<br>");
colorsF.splice(userAddArrayIndex - 1, 0, userInput1);
document.write(colorsF);

var colorsG = ["red", "green", "brown", "orange"];
var userRemArrayIndex = +prompt("\nTask 9(g):\n\n" + colorsG + "\nEnter the position number where you want to remove a color.");
var userArrayEleRemove = +prompt("\nTask 9(g):\n\n" + colorsG + "\nEnter the number of elements that you want to remove.");

document.write("<p><br><br><br><br>Task 9(g):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsG);

document.write("<br>Array after upadte:<br>");
colorsG.splice(userRemArrayIndex - 1, userArrayEleRemove);
document.write(colorsG);