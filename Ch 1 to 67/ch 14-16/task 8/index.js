var students = ["Michael", "John", "Tony"];
var score = [320, 230, 480];
var marks = 500;
var percentage;

for (i = 0; i < 3; i++) {
    percentage = (score[i] / marks) * 100;
    document.write("<br>Score of " + students[i] + " is " + score[i] + " Percentage : " + percentage + "%");
}