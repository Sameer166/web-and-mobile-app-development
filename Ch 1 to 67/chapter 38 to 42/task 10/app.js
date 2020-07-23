var Amount = prompt("Enter amount to withdraw");
if (Amount % 10 !== 0) {
    alert("Enter amount in multiple of 10");
}

function withdraw(Amount) {
    var money = [10, 50, 100];
    var execute = [];
    for (var c = notes.length - 1; c >= 0; c--) {
        execute.push((Amount - Amount % money[c]) / money[c])
        Amount -= Amount - Amount % money[c]
    }
    return execute;
}
document.write("You'll have " + withdraw(Amount)[0] + " hundred note(s) " + withdraw(Amount)[1] + " fifty note(s) " + withdraw(Amount)[2] + " ten note(s)");