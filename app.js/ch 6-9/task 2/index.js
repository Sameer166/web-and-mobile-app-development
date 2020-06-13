var a = 2,
    b = 1;

--a;
--b;
document.write(a);
document.write("<br>")
document.write(b);
document.write("<br><br>");

var b = 1;
b--;
document.write(b);
document.write("<br><br>");

var b = 1;
++b;
document.write(b);
document.write("<br><br>");

var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
document.write("result =" + result);