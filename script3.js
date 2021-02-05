// Задание 1
console.log("Задание 1.");
var i = 0;
var counter = 0;
limiter = 100; // Можно задать, до какого числа искать простые числа
while (i < limiter) {
    var j = 2; // Начинаю проверять сразу с деления на 2, потому с 0 и 1 всё и так ясно.
    while (j <= i && i < limiter) {
        if (i % j == 0 && i != j) {
            i++;
            j = 2;
            continue;
        } else if (i % j == 0 && i == j) {
            console.log(i);
            counter++;
        }
        j++;
    }
    i++
}
console.log("Сколько простых чисел в отрезке от 0 до " + limiter + ": " + counter);


console.log(" ");


// Задание 2 и 3
console.log("Задание 2 и 3.");
var vegetableBasket = [
    {
        title: "cucumber",
        price: 555,
        amount: 50
    },
    {
        title: "tomato",
        price: 210,
        amount: 75
    },
    {
        title: "sweet pepper",
        price: 300,
        amount: 20
    },
    {
        title: "white cabbage",
        price: 16,
        amount: 130
    },
    {
        title: "potato",
        price: 35,
        amount: 540
    }
]

function countBasketPrice(basket) {
    var priceOfAllBasket = 0;
    for (var item of basket) {
        console.log(item.title + ": " + (item.price * item.amount) + " руб.");
        priceOfAllBasket += item.price * item.amount;
    }
    console.log("Стоимость всего товара: " + priceOfAllBasket + " руб.");
}
countBasketPrice(vegetableBasket);

console.log(" ");

//Задание 4
console.log("Задание 4");

//Так нужно было сделать? Не совсем понятно задание...
for (i = 0; i < 10; console.log(i), i++) { }

console.log(" ");

//Задание 5
console.log("Задание 5");

var string = "";
for (i = 1; i <= 20; i++) {
    console.log(string += "x");
}
