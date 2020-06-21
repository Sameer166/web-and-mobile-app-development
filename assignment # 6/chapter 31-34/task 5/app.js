var date = new Date();

console.log(date);

var getDayofMonth = date.getDate();

console.log(getDayofMonth);

if (getDayofMonth < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}