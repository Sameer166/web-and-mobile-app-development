function average(stu1, stu2, stu3) {
    return (stu1 + stu2 + stu3) / 3;
}

function percentage(stu1, stu2, stu3, total) {
    return ((stu1 + stu2 + stu3) / total) * 100;
}

function mainFunction(stu1, stu2, stu3, total) {
    var avg = average(stu1, stu2, stu3);
    var percent = percentage(stu1, stu2, stu3, total);
    document.write("Your average Marks are " + avg.toFixed(2) + "and your percentage is " + percent.toFixed(2));
}