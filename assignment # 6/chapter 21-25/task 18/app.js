var par = "The quick brown fox jumps over the lazy dog";

document.write("Text : " + par + "<br>");

let text = par.toLowerCase();

var search = prompt("Enter value").toLowerCase();
var textIndex = -1;
var count = 0;

for (var i = 0; i < text.length; i++) {
    textIndex = text.indexOf(search, textIndex + 1);
    if (textIndex >= 0) {
        count++;
    } else {
        if (count == 0) {
            alert("Not Found!");
        }
        break;
    }
    console.log("index = " + textIndex);
}
document.write("There are " + count + " occurrence(s) of the word " + "'" + search + "'.");
console.log("Counter = " + count);