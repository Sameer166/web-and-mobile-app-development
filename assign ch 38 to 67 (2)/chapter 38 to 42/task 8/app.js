function dist_in_meters(d) {
    return d * 1000;
}

function dist_in_feet(d) {
    return d * 3281; //approx 
}

function dist_in_inches(d) {
    return d * 39370;
}

function dist_in_centimeters(d) {
    return d * 100000;
}
var dist = prompt("Enter distance between two cities (in km.)");
var out = "Distance in meters: " + dist_in_meters(dist) + "\n" +
    "Distance in feet: " + dist_in_feet(dist) + "\n" +
    "Distance in inches: " + dist_in_inches(dist) + "\n" +
    "Distance in centimeters: " + dist_in_centimeters(dist) + "\n";
document.write(out);