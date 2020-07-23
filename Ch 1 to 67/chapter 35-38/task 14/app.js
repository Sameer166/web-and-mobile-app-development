var radius = parseInt(prompt("Enter Radius!"));

// Find Circumference
function findCircumference(findCircum) {
    var circumference = Math.PI * 2 * findCircum;
    alert("Circumference of Circle = " + circumference);
}
findCircumference(radius);

// Find Area Of Circle
function findAreaOfCircle(findArea) {

    var area = Math.PI * findArea * findArea;
    alert("Area of Circle = " + area);
}
findAreaOfCircle(radius);