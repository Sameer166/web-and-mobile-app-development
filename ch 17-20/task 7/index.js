var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

var userInput = prompt("\nTask 7:\n\nPlease enter any bakery items for search.");

for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        alert("\nTask 7:\n\n" + userInput + " is available at index " + i + " in our bakery");
        break;
    } else if (i + 1 === bakeryItems.length && bakeryItems[i] != userInput) {
        alert("\nTask 7:\n\n" + userInput + " is not available in our bakery")
    }
}