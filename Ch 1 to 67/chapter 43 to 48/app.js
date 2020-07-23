// Html Task 1 

// Html Task 2 

// Html Task 3
// function rowDelete(rowIndex){
//     document.getElementById("table").deleteRow(rowIndex);
// }
function rowDelete(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

// Html Task 4
function image1() {
    var image = document.getElementById('img');
    image.src = "1.jpg";
}

function image2() {
    var image = document.getElementById('img');
    image.src = "2.jpg";
}
// Html Task 5
var value = document.getElementById("count");

function increase() {
    value.innerHTML = +value.innerHTML + 1;
}

function decrease() {
    value.innerHTML -= 1;
}