var userInput = prompt("Please enter some value!");

const round = Math.round(userInput);
const floor = Math.floor(userInput);
const ceil = Math.ceil(userInput);

document.write("Number : " + userInput + "<br>");
document.write("Round Off : " + round + "<br>");
document.write("Floor : " + floor + "<br>");
document.write("Ceil : " + ceil + "<br>");