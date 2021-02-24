var vegetableBasket = [
    {
        id: 001,
        title: "Cucumber",
        price: 555,
        amount: 50,
        url: "url('img/cucumber.jpg')"
    },
    {
        id: 002,
        title: "Tomato",
        price: 210,
        amount: 75,
        url: "url('img/tomato.jpg')"
    },
    {
        id: 003,
        title: "Sweet pepper",
        price: 300,
        amount: 20,
        url: "url('img/sweet_pepper.jpg')"
    },
    {
        id: 004,
        title: "White cabbage",
        price: 16,
        amount: 130,
        url: "url('img/white_cabbage.jpg')"
    },
    {
        id: 005,
        title: "Potato",
        price: 35,
        amount: 540,
        url: "url('img/potato.jpg')"
    }
];
function showBasket() {
    var units = document.getElementById("allSum");
    var text = document.getElementById("forAllSum");
    var text = document.createElement("p");
    text.setAttribute("id", "forAllSum");
    text.innerText = "";
    text.innerText = "Общая сумма: " + AllMoney;
    units.appendChild(text);
}

function showCatalog() {
    var units = document.querySelectorAll("div")[2];
    for (i = 0; i < vegetableBasket.length; i++) {
        var bigDiv = document.createElement("div");
        var div = document.createElement("div");
        var img = document.createElement("div");
        var price = document.createElement("div");
        var button = document.createElement("button");
        bigDiv.setAttribute("id", i);
        bigDiv.setAttribute("class", "bigDiv");
        div.setAttribute("id", vegetableBasket[i].id);
        img.setAttribute("id", "img_" + i);
        img.setAttribute("class", "img");
        img.style.backgroundImage = vegetableBasket[i].url;
        price.setAttribute("id", "price_" + i);
        price.setAttribute("class", "price");
        button.setAttribute("id", "button_" + i);
        button.setAttribute("class", "button");
        div.innerText = vegetableBasket[i].title;
        price.innerText = vegetableBasket[i].price + " р. за кг.";
        button.innerText = "Добавить";
        img.appendChild(price);
        bigDiv.appendChild(div);
        bigDiv.appendChild(img);
        bigDiv.appendChild(button);
        units.appendChild(bigDiv);
        var buttons = document.querySelectorAll("button");
        buttons[i].addEventListener("click", addToBasket);
    }
}
var AllMoney = 0;
function addToBasket(eventObj) {
    if (document.getElementById(eventObj.target.id.split("_")[1] + "_p")) {
        alert("Товар уже добавлен в корзину");
    } else {
        ++k;
        var units = document.querySelectorAll("div")[0];
        var BigDivForItems = document.createElement("div");
        var idOfItem = eventObj.target.id.split("_")[1];
        var divItem = document.createElement("div");
        var divQuantity = document.createElement("div");
        var quantity = document.createElement("input");
        var text = document.createElement("p");
        var buttonInBasket = document.createElement("button");
        var sum = document.createElement("p");
        BigDivForItems.setAttribute("class", "BigDibForItems");
        BigDivForItems.setAttribute("id", "BigDibForItems_" + idOfItem);
        divQuantity.setAttribute("class", "divQuantity");
        quantity.setAttribute("type", "text");
        quantity.setAttribute("value", "1");
        quantity.setAttribute("id", idOfItem + "_q");
        divItem.setAttribute("class", "itemInBasket");
        sum.setAttribute("class", "sum");
        sum.setAttribute("id", idOfItem + "_p");
        buttonInBasket.setAttribute("class", "buttonInBasket");
        buttonInBasket.setAttribute("id", idOfItem);
        text.innerText = "Кол-во: ";
        buttonInBasket.innerText = "Изменить";
        divItem.innerText = vegetableBasket[idOfItem].title;
        divQuantity.appendChild(text);
        sum.innerText = "Сумма: " + vegetableBasket[idOfItem].price;
        BigDivForItems.appendChild(divItem);
        BigDivForItems.appendChild(divQuantity);
        BigDivForItems.appendChild(quantity);
        BigDivForItems.appendChild(buttonInBasket);
        BigDivForItems.appendChild(sum);
        units.appendChild(BigDivForItems);
        for (j = 0; j < k; j++) {
            var buttonsInBasket = document.querySelectorAll("button");
            buttonsInBasket[j].addEventListener("click", changeTheSum);
        }
        getAllPrice();
        var textForPrice = document.getElementById("forAllSum");
        textForPrice.innerText = "Общая сумма: " + AllMoney;
    }
}
var k = 0;
function changeTheSum(eventObj) {
    var units = document.querySelectorAll("input");
    for (var elem of units) {
        if (elem.id == (eventObj.target.id + "_q")) {
            document.getElementById(eventObj.target.id + "_q").id;
            document.getElementById(eventObj.target.id + "_p").innerText = "Сумма: " +
                (document.getElementById(eventObj.target.id + "_q").value) * vegetableBasket[eventObj.target.id].price;
        }
    }
    getAllPrice();
    var textForPrice = document.getElementById("forAllSum");
    textForPrice.innerText = "Общая сумма: " + AllMoney;
}

function getAllPrice() {
    AllMoney = 0;
    for (i = 0; i < document.getElementsByClassName("sum").length; i++) {
        AllMoney += parseInt(document.getElementsByClassName("sum")[i].innerHTML.split(" ")[1]);
    }
}

showBasket();
showCatalog();




