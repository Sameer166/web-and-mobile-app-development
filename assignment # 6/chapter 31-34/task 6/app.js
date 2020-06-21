/* ---------- Get Current Date Example ---------- */

var date = new Date();
document.write("Current Date : " + date + "<br>");

var miliSecond = date.getTime();
document.write("Elapsed miliseconds since January 1, 1970 : " + miliSecond + "<br>");

var minute = (miliSecond / 6000) / 600;
document.write("Elapsed minutes since January 1, 1970 : " + minute + "<br>");




/* ---------- Task Example ---------- */

alert("Task Example!");

var myDate = new Date("12/05/2015 22:32:23");
alert("My Date : " + myDate);

var miliSeconds = myDate.getTime();
alert("Elapsed miliseconds since January 1, 1970 : " + miliSeconds);

var minutes = (miliSeconds / 6000) / 600;
alert("Elapsed minutes since January 1, 1970 : " + minutes);