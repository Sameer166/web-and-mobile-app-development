var drink = "tea";
var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
document.write(message);