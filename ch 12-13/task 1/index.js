var letters = prompt("/^[A-Za-z]+$/");
if (inputtxt.value.match(letters)) {
    return true;
} else {
    alert("message");
    return false;
}