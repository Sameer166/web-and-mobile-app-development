var message = ("Ali and Sami are best friends. They play cricket and football together.");
alert("Before replace: " + message);
var message = message.replace(/and/g, "&");
alert("After replace: " + message);