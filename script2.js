// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
/* В этом случае сначала выполняется инкремент, т.к.
++ стоят перед значением а. То есть к 1 прибавляется 1,
и потом записывается в с.*/

d = b++; alert(d);           // 1
/* Здесь будет значение 1. Сначала выполнчется операция присваивания.
То есть сначала значение b передаётся значению d, 
а потом значение b увеличивается на 1.*/

c = (2 + ++a); alert(c);      // 5
/* Опять таки сначала выполняется операция инкремента, а потом
сложения. У нас в 1 примере а=2, теперь прибавляемя ещё 1, а=3,
и выполняем операцию сложения (2 + 3) - получается 5.*/

d = (2 + b++); alert(d);      // 4
/* Во втором примере b стало равняться 2. Здесь сначала выполняется
операция сложения - (2 + 2) = 4, а потом к b прибавляется 1.*/

alert(a);                    // 3
/* В третьем примере а стало равняться 3*/

alert(b);                    // 3
/* В четвёртом примере b также стало равняться 3*/

// Задание 2
a = 2;
var x = 1 + (a *= 2);
/* Сначала выполняется операция в (). По другому эту операцию можно
записать как - (a = a *2) = 4. Потом операция сложения - 1 + 4 = 5.
x = 5.
Проверяем: */
alert("x = " + x);

// Задание 3
// Зададим a и b произвольные значения от -50 до 50
a = parseInt(Math.random() * (50 + 50) - 50);
b = parseInt(Math.random() * (50 + 50) - 50);

function oper(a, b) {
    if (a >= 0 && b >= 0) {
        return ("Задание 3.\nОба значения положительные!\na = " + a + "; b = " + b + ";\na - b = " + (a - b));
    } else if (a < 0 && b < 0) {
        return ("Задание 3.\nОба значения отрицательные!\na = " + a + "; b = " + b + ";\na * b = " + (a * b));
    } else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
        return ("Задание 3.\nОба значения разные!\na = " + a + "; b = " + b + ";\na + b = " + (a + b));
    }
}
alert(oper(a, b));

// Задание 4
a = parseInt(Math.random() * 15);
console.log("Задание 4: a = " + a);
/* Я не буду ставить оператор break, тогда после выполнения
определённого case все остальные case за ним будут выполнены
по порядку.*/

switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

// Задание 5
function sum(a, b) {
    return "a + b = " + (a + b);
}
function sub(a, b) {
    return "a - b = " + (a - b);
}
function mul(a, b) {
    return "a * b = " + (a * b);
}
function div(a, b) {
    return "a / b = " + (a / b);
}

// Задание 6

function choseOperation() {
    var i = parseInt(Math.random() * 4);
    if (i == 0) {
        return "+";
    }
    if (i == 1) {
        return "-";
    }
    if (i == 2) {
        return "*";
    }
    if (i == 3) {
        return "/";
    }
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            c = sum(arg1, arg2);
            break;
        case "-":
            c = sub(arg1, arg2);
            break;
        case "*":
            c = mul(arg1, arg2);
            break;
        case "/":
            c = div(arg1, arg2);
            break;
    }
    return c;
}
a = parseInt(Math.random() * (50 + 50) - 50);
b = parseInt(Math.random() * (50 + 50) - 50);
console.log("Задание 6.\na = " + a + "; b = " + b + ";\n" + mathOperation(a, b, choseOperation()));

// Задание 7
console.log("Задание 7.");
a = 0;
n = null;
console.log(a < n); //false
console.log(a <= n); //true
console.log(a == n); //false
console.log(a >= n); //true
console.log(a > n); //false
console.log(a === n); //false

/* Прочитал ответ на вопрос "Почему (a <= n) и (a >= n) возвращают
true?" здесь: https://habr.com/ru/company/ruvds/blog/337732/
Ответ кроется в спецификации. Вместо того, чтобы проверять равенство
>= или <=, проверяется равенство < и > соответственно (Это быстрее).
И как мы выше увидели при > и < будет false, значит при >= или <=
будет true. */

// Задание 8. 1 вариант без метода Math.pow();
// Надеюсь, что я правильно понял задание...
console.log("Задание 8. Вариант 1.");
var val = +prompt("Введите число:");
var pow = +prompt("Введите степень:");
var i = 0;
a = val;
b = 2; // Нужно просто для наглядности. Показывает степень на данный момент
function power(vallue, pow) {
    if (vallue == 0 || pow == 0) {
        console.log("Какое-то из значений равно 0."); //Проверяем на 0
        return;
    }
    if ((i + 1) == pow) { // Счётчик для степени
        return;
    }
    a = vallue * val;
    i++;
    console.log(val + " в степени " + b++ + " = " + a);
    power(a, pow);
}
power(val, pow);


// Задание 8. 2 вариант с методом Math.pow();
console.log("Задание 8. Вариант 2.");
val = +prompt("Введите число:");
pow = +prompt("Введите степень:");
i = 0;
a = val;
b = 1; // Нужно просто для наглядности. Показывает степень на данный момент
function powerPow(vallue, pow) {
    if (vallue == 0 || pow == 0) {
        console.log("Какое-то из значений равно 0."); //Проверяем на 0
        return;
    }
    if (i == pow) { // Счётчик для степени
        return;
    }
    c = Math.pow(val, ++i);
    console.log(val + " в степени " + b++ + " = " + c);
    powerPow(val, pow);
}
powerPow(val, pow)
