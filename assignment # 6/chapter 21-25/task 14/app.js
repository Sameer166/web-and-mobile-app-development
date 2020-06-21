var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Please enter any bakery items for search.").toLowerCase();

for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        alert(" " + userInput + " is available at index " + i + " in our bakery");
        break;
    } else if (i + 1 === bakeryItems.length && bakeryItems[i] != userInput) {
        alert(" " + userInput + " is not available in our bakery");
    }
}