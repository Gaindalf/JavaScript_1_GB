// Коды шахматный фигур:





var table = document.createElement("table");
var tr, td, i, numbergfd;

function createAChessboard() {

    for (i = 0; i < 10; i++) {
        tr = document.createElement("tr");
        table.append(tr);
        for (j = 0; j < 10; j++) {
            td = document.createElement("td");
            if ((i + j) % 2 == 0 && i != 0 && i != 9 && j != 0 && j != 9) {
                td.setAttribute("class", "white field");
            } else if (i != 0 && i != 9 && j != 0 && j != 9) {
                td.setAttribute("class", "black field");
            } else if ((i == 0 && j == 0) || (i == 9 && j == 0) || (i == 0 && j == 9) || (i == 9 && j == 9)) {
                td.setAttribute("class", "corner");
            }
            else {
                td.setAttribute("class", "numeration");
                td.innerHTML = "<p>1</p>";
            }
            if ((i == 0 && j == 0) || (i == 0 && j == 9) || (i == 9 && j == 0) || (i == 9 && j == 9)) { //Вставляем нумерацию по краю поля
            } else if (j == 0 || j == 9) {
                if ((i == 8 && j == 0) || (i == 8 && j == 9)) {
                    td.innerHTML = "<p>1</p>";
                } else if ((i == 7 && j == 0) || (i == 7 && j == 9)) {
                    td.innerHTML = "<p>2</p>";
                } else if ((i == 6 && j == 0) || (i == 6 && j == 9)) {
                    td.innerHTML = "<p>3</p>";
                } else if ((i == 5 && j == 0) || (i == 5 && j == 9)) {
                    td.innerHTML = "<p>4</p>";
                } else if ((i == 4 && j == 0) || (i == 4 && j == 9)) {
                    td.innerHTML = "<p>5</p>";
                } else if ((i == 3 && j == 0) || (i == 3 && j == 9)) {
                    td.innerHTML = "<p>6</p>";
                } else if ((i == 2 && j == 0) || (i == 2 && j == 9)) {
                    td.innerHTML = "<p>7</p>";
                } else if ((i == 1 && j == 0) || (i == 1 && j == 9)) {
                    td.innerHTML = "<p>8</p>";
                }
            } else if (i == 0 || i == 9) {
                if ((j == 1 && i == 0) || (j == 1 && i == 9)) {
                    td.innerHTML = "<p>A</p>";
                } else if ((j == 2 && i == 0) || (j == 2 && i == 9)) {
                    td.innerHTML = "<p>B</p>";
                } else if ((j == 3 && i == 0) || (j == 3 && i == 9)) {
                    td.innerHTML = "<p>C</p>";
                } else if ((j == 4 && i == 0) || (j == 4 && i == 9)) {
                    td.innerHTML = "<p>D</p>";
                } else if ((j == 5 && i == 0) || (j == 5 && i == 9)) {
                    td.innerHTML = "<p>E</p>";
                } else if ((j == 6 && i == 0) || (j == 6 && i == 9)) {
                    td.innerHTML = "<p>F</p>";
                } else if ((j == 7 && i == 0) || (j == 7 && i == 9)) {
                    td.innerHTML = "<p>G</p>";
                } else if ((j == 8 && i == 0) || (j == 8 && i == 9)) {
                    td.innerHTML = "<p>H</p>";
                }
            } else {
                // td.innerText = i + " _ " + j;
            }
            tr.append(td);
        }
    }
    document.getElementById("сhessboar").append(table);
}

createAChessboard();
//alert("Hello");
/*
var header = document.createElement("h1");
header.innerHTML = "&#9816;";
document.getElementById("x").append(header);
*/