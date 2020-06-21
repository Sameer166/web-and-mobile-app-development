var hour = date_obj.getHours();
var minute = date_obj.getMinutes();
var amPM = (hour > 11) ? "pm" : "am";
if (hour > 12) {
    hour -= 12;
} else if (hour == 0) {
    hour = "12";
}
if (minute < 10) {
    minute = "0" + minute;
}
return hour + ":" + minute + amPM;
}