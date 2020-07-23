var userName = prompt("Enter your full name:");
var specialSymbol = ["!", ",", ".", "@"];
var message = null;

for (i = 0; i < userName.length; i++) {
    for (j = 0; j < specialSymbol.length; j++) {
        if (userName[i] === specialSymbol[j]) {
            message = "Please enter a valid user name";
        }
    }
}

if (!message) {
    alert("Hello! Welcome " + userName);
} else {
    alert(" " + message);
}