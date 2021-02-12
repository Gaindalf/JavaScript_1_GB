// Коды шахматный фигур:
var king = "K"; // Король
var queen = "Ф"; // Ферзь
var bishop = "C"; // Слон
var rook = "Л"; // Ладья
var knight = "К"; // Конь
var pawn = "П"; // Пешка

// Массив для фигур:
var chessPieces = [
    { title: "black rook", cod: "&#9820;" },
    { title: "black knight", cod: "&#9822;" },
    { title: "black bishop", cod: "&#9821;" },
    { title: "black queen", cod: "&#9819;" },
    { title: "black king", cod: "&#9818;" },
    { title: "black bishop", cod: "&#9821;" },
    { title: "black knight", cod: "&#9822;" },
    { title: "black rook", cod: "&#9820;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "black pawn", cod: "&#9823;" },
    { title: "white rook", cod: "&#9814;" },
    { title: "white knight", cod: "&#9816;" },
    { title: "white bishop", cod: "&#9815;" },
    { title: "white queen", cod: "&#9813;" },
    { title: "white king", cod: "&#9812;" },
    { title: "white bishop", cod: "&#9815;" },
    { title: "white knight", cod: "&#9816;" },
    { title: "white rook", cod: "&#9814;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
    { title: "white pawn", cod: "&#9817;" },
];

var table = document.createElement("table");
var tr, td, i;
function createAChessBoard() {
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
            if ((i == 0 && j == 0) || (i == 0 && j == 9) || (i == 9 && j == 0) || (i == 9 && j == 9)) {
                //Вставляем нумерацию по краю поля
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
                if (i == 2) { // задаём для всех фигур id, чтобы в будущем можно было к ним обращаться
                    switch (j) { //Чёрные пешки
                        case 1: td.setAttribute("id", "blackChessPiece_pawn1");
                            break;
                        case 2: td.setAttribute("id", "blackChessPiece_pawn2");
                            break;
                        case 3: td.setAttribute("id", "blackChessPiece_pawn3");
                            break;
                        case 4: td.setAttribute("id", "blackChessPiece_pawn4");
                            break;
                        case 5: td.setAttribute("id", "blackChessPiece_pawn5");
                            break;
                        case 6: td.setAttribute("id", "blackChessPiece_pawn6");
                            break;
                        case 7: td.setAttribute("id", "blackChessPiece_pawn7");
                            break;
                        case 8: td.setAttribute("id", "blackChessPiece_pawn8");
                            break;
                    }
                } else if (i == 7) { // Белые пешки
                    switch (j) {
                        case 1: td.setAttribute("id", "whiteChessPiece_pawn1");
                            break;
                        case 2: td.setAttribute("id", "whiteChessPiece_pawn2");
                            break;
                        case 3: td.setAttribute("id", "whiteChessPiece_pawn3");
                            break;
                        case 4: td.setAttribute("id", "whiteChessPiece_pawn4");
                            break;
                        case 5: td.setAttribute("id", "whiteChessPiece_pawn5");
                            break;
                        case 6: td.setAttribute("id", "whiteChessPiece_pawn6");
                            break;
                        case 7: td.setAttribute("id", "whiteChessPiece_pawn7");
                            break;
                        case 8: td.setAttribute("id", "whiteChessPiece_pawn8");
                            break;
                    }
                } else if (i == 1) {
                    switch (j) {
                        case 1: td.setAttribute("id", "blackChessPiece_1");
                            break;
                        case 2: td.setAttribute("id", "blackChessPiece_2");
                            break;
                        case 3: td.setAttribute("id", "blackChessPiece_3");
                            break;
                        case 4: td.setAttribute("id", "blackChessPiece_4");
                            break;
                        case 5: td.setAttribute("id", "blackChessPiece_5");
                            break;
                        case 6: td.setAttribute("id", "blackChessPiece_6");
                            break;
                        case 7: td.setAttribute("id", "blackChessPiece_7");
                            break;
                        case 8: td.setAttribute("id", "blackChessPiece_8");
                            break;
                    }
                } else if (i == 8) {
                    switch (j) {
                        case 1: td.setAttribute("id", "whiteChessPiece_1");
                            break;
                        case 2: td.setAttribute("id", "whiteChessPiece_2");
                            break;
                        case 3: td.setAttribute("id", "whiteChessPiece_3");
                            break;
                        case 4: td.setAttribute("id", "whiteChessPiece_4");
                            break;
                        case 5: td.setAttribute("id", "whiteChessPiece_5");
                            break;
                        case 6: td.setAttribute("id", "whiteChessPiece_6");
                            break;
                        case 7: td.setAttribute("id", "whiteChessPiece_7");
                            break;
                        case 8: td.setAttribute("id", "whiteChessPiece_8");
                            break;
                    }
                }
            }
            tr.append(td);
        }
    }
    document.getElementById("сhessboar").append(table);
}

createAChessBoard();
locationOfChessPieces();

function locationOfChessPieces() {
    for (i = 0; i < 8; i++) { // Расставляем чёрные пешки
        chessPieces[8 + i].chessPiece_pawn = document.getElementById("blackChessPiece_pawn" + (i + 1));
        chessPieces[8 + i].chessPiece_pawn.innerHTML = chessPieces[8 + i].cod;
    }
    for (i = 0; i < 8; i++) { // Расставляем белые пешки
        chessPieces[24 + i].chessPiece = document.getElementById("whiteChessPiece_pawn" + (i + 1));
        chessPieces[24 + i].chessPiece.innerHTML = chessPieces[24 + i].cod;
    }
    for (i = 0; i < 8; i++) { //Раставляем чёрные фигуры
        chessPieces[i].chessPiece = document.getElementById("blackChessPiece_" + (i + 1));
        chessPieces[i].chessPiece.innerHTML = chessPieces[i].cod;
    }
    for (i = 0; i < 8; i++) { //Раставляем белые фигуры
        chessPieces[16 + i].chessPiece = document.getElementById("whiteChessPiece_" + (i + 1));
        chessPieces[16 + i].chessPiece.innerHTML = chessPieces[16 + i].cod;
    }
}

