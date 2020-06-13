var a = 4;
if (++a === 5) {
    alert("Task 5(a):\n\nGiven condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("Task 5(b):\n\nGiven condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("Task 5(c):\n\nCondition 1 is true");
}
if (c === 13) {
    alert("Task 5(c):\n\nCondition 2 is true");
}
if (++c < 14) {
    alert("Task 5(c):\n\nCondition 3 is true");
}
if (c === 14) {
    alert("Task 5(c):\n\nCondition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("Task 5(d):\n\nThe cost equals");
}

if (true) {
    alert("Task 5(e):\n\nTrue");
}
if (false) {
    alert("Task 5(d):\n\nFalse");
}
if ("cow" > "cat") {
    alert("Task 5(f):\n\nCow is grater than cat");
}