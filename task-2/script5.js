// Коды шахматный фигур:
var king = "K"; // Король
var queen = "Ф"; // Ферзь
var bishop = "C"; // Слон
var rook = "Л"; // Ладья
var knight = "К"; // Конь
var pawn = "П"; // Пешка




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
                if (i == 2) { // задаём для всех фигур классы и id, чтобы в будущем можно было к ним обращаться
                    switch (j) {
                        case 1: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "1");
                            break;
                        case 2: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "2");
                            break;
                        case 3: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "3");
                            break;
                        case 4: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "4");
                            break;
                        case 5: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "5");
                            break;
                        case 6: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "6");
                            break;
                        case 7: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "7");
                            break;
                        case 8: td.innerHTML = "<p class= 'blackChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "8");
                            break;
                    }
                } else if (i == 7) {
                    switch (j) {
                        case 1: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "1");
                            break;
                        case 2: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "2");
                            break;
                        case 3: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "3");
                            break;
                        case 4: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "4");
                            break;
                        case 5: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "5");
                            break;
                        case 6: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "6");
                            break;
                        case 7: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "7");
                            break;
                        case 8: td.innerHTML = "<p class= 'whiteChessPiece pawn'>" + pawn + "</p>";
                            td.setAttribute("id", "8");
                            break;
                    }
                } else if (i == 1) {
                    switch (j) {
                        case 1: td.innerHTML = "<p class= 'blackChessPiece rook'>" + rook + "</p>";
                            td.setAttribute("id", "1");
                            break;
                        case 2: td.innerHTML = "<p class= 'blackChessPiece knight'>" + knight + "</p>";
                            td.setAttribute("id", "2");
                            break;
                        case 3: td.innerHTML = "<p class= 'blackChessPiece bishop'>" + bishop + "</p>";
                            td.setAttribute("id", "3");
                            break;
                        case 4: td.innerHTML = "<p class= 'blackChessPiece queen'>" + queen + "</p>";
                            td.setAttribute("id", "4");
                            break;
                        case 5: td.innerHTML = "<p class= 'blackChessPiece king'>" + king + "</p>";
                            td.setAttribute("id", "5");
                            break;
                        case 6: td.innerHTML = "<p class= 'blackChessPiece bishop'>" + bishop + "</p>";
                            td.setAttribute("id", "6");
                            break;
                        case 7: td.innerHTML = "<p class= 'blackChessPiece knight'>" + knight + "</p>";
                            td.setAttribute("id", "7");
                            break;
                        case 8: td.innerHTML = "<p class= 'blackChessPiece rook'>" + rook + "</p>";
                            td.setAttribute("id", "8");
                            break;
                    }
                } else if (i == 8) {
                    switch (j) {
                        case 1: td.innerHTML = "<p class= 'whiteChessPiece rook'>" + rook + "</p>";
                            td.setAttribute("id", "1");
                            break;
                        case 2: td.innerHTML = "<p class= 'whiteChessPiece knight'>" + knight + "</p>";
                            td.setAttribute("id", "2");
                            break;
                        case 3: td.innerHTML = "<p class= 'whiteChessPiece bishop'>" + bishop + "</p>";
                            td.setAttribute("id", "3");
                            break;
                        case 4: td.innerHTML = "<p class= 'whiteChessPiece queen'>" + queen + "</p>";
                            td.setAttribute("id", "4");
                            break;
                        case 5: td.innerHTML = "<p class= 'whiteChessPiece king'>" + king + "</p>";
                            td.setAttribute("id", "5");
                            break;
                        case 6: td.innerHTML = "<p class= 'whiteChessPiece bishop'>" + bishop + "</p>";
                            td.setAttribute("id", "6");
                            break;
                        case 7: td.innerHTML = "<p class= 'whiteChessPiece knight'>" + knight + "</p>";
                            td.setAttribute("id", "7");
                            break;
                        case 8: td.innerHTML = "<p class= 'whiteChessPiece rook'>" + rook + "</p>";
                            td.setAttribute("id", "8");
                            break;
                    }
                }
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