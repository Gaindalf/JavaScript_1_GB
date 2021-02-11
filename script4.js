// Задание 1
var obj = {};

function setNumbers() {
    var number;
    var i = 0;
    while (i < 3) { // Есть 3 попытки, чтобы ввести нужное число
        number = prompt("Введите число от 0 до 999.", 0);
        if (number > 999) {
            alert("Вы ввели слишком большое число!");
        } else if (number < 0) {
            alert("Вы ввели число меньше 0!");
        } else if (isNaN(number)) {
            alert("Вы ввели не число!");
        } else if (number.split("").length == 0) {
            alert("Вы ничего не ввели");
        } else {
            break;
        }
        i++;
    }

    if (i == 3) {
        alert("Ваши попытки закончились!");
    } else {
        if (number.split("").length == 1) {
            obj.ed = +number[0];
        } else if (number.split("").length == 2) {
            obj.dec = +number[0];
            obj.ed = +number[1];
        } else if (number.split("").length == 3) {
            obj.hund = +number[0];
            obj.dec = +number[1];
            obj.ed = +number[2];
        }
    }
    return obj;
}
setNumbers();
console.log(obj);

// Задание 3

var questionsAndAnswers = [
    {
        q: "Какой в Швеции социальный строй?",
        a: "Социализм",
        b: "Капитализм",
        c: "Коммунизм",
        d: "Тоталитаризм",
        e: "В Швеции социализм. И это значит, что люди платят\n" +
            "большие налоги. Но большая часть этих денег тратится\n" +
            "на социальное обеспечение.",
        f: [1]
    },
    {
        q: "Назовите произведение шведского писателя.",
        a: "Пеппи Длинныйчулок",
        b: "Эмиль из Ленниберге",
        c: "Малыш и Карлсон, который живёт на крыше",
        d: "Чудесное путешествие Нильса с дикими гусями",
        e: "С детской литературой в Швеции проблем нет, ведь у них\n" +
            "есть (была) Астрид Линдгрен. А Астрид Линдгрен — это и\n" +
            "Пеппи Длинный Чулок и Карлсон и Эмиль из Ленниберге.\n" +
            "А недавно и до России дошли книжки про Петсона и\n" +
            "Финдуса (автор и иллюстратор Свен Нурдквист).\n" +
            "Также всем мы знаем «Повесть о Нильсе с дикими гусями»,\n" +
            "также написанную шведской писательницей Сельмой Лагерлёф.",
        f: [1, 2, 3, 4]
    },
    {
        q: "Какая шведская актриса прославилась в Голливуде?",
        a: "Вивьен Ли",
        b: "Ингеборга Дапкунайте",
        c: "Ингрид Бергман",
        d: "Роми Шнайдер",
        e: "Ингрид Бергман известна многим по фильму Касабланка.",
        f: [3]
    },
    {
        q: "В каких областях выдается Нобелевская премия?",
        a: "Физика",
        b: "Химия",
        c: "Литература",
        d: "Медицина",
        e: "Существует Нобелевская премия мира, а также премии\n" +
            "по физике, химии, литературе, физиологии и медицине.",
        f: [1, 2, 3, 4]
    },
    {
        q: "Какая бесплатная газета, появившаяся в 1995 году в Стокгольме,\n" +
            "сейчас выходит еще в 19 странах и на 15 языках?",
        a: "Вокзал",
        b: "Такси",
        c: "Аэропорт",
        d: "Метро",
        e: "Речь идет о газете Metro.",
        f: [4]
    }
];

function showQuestion(questions) {
    var text = "";
    var score = 0;
    var allAnswersRight = true;
    for (i = 0; i < questions.length; i++) {
        answer = +prompt(questions[i].q + "\n\n" +
            "1. " + questions[i].a + "\n" +
            "2. " + questions[i].b + "\n" +
            "3. " + questions[i].c + "\n" +
            "4. " + questions[i].d + "\nВведите -1 для выхода."
        );
        if (answer == -1) {
            allAnswersRight = false;
            break;
        } else if (!isAnswer(4, answer)) {
            i--;
        } else if (isAnswer(4, answer)) {
            if (questions[i].f.indexOf(answer) == -1) {
                alert("Вы дали не правильный ответ\n" +
                    "Игра окончена. Вы проиграли.");
                allAnswersRight = false;
                break;
            }
            var getRightAnswers = "";
            for (j = 0; j < questions[i].f.length; j++) {//Находим правильные ответы для вывода на экран
                if (questions[i].f.length > 1) {
                    text = "Правильные ответы: ";
                } else {
                    text = "Правильный ответ: ";
                }
                for (k = 1; k <= questions.length; k++) { // конструкция для вывода списка правильных ответов
                    if (questions[i].f[j] == k) {
                        if (questions[i].f[j] == 1) {
                            getRightAnswers += questions[i].a;
                            if (questions[i].f[j + 1] != undefined) {
                                getRightAnswers += ", ";
                            } else {
                                getRightAnswers += ".";
                            }
                        } else if (questions[i].f[j] == 2) {
                            getRightAnswers += questions[i].b;
                            if (questions[i].f[j + 1] != undefined) {
                                getRightAnswers += ", ";
                            } else {
                                getRightAnswers += ".";
                            }
                        } else if (questions[i].f[j] == 3) {
                            getRightAnswers += questions[i].c;
                            if (questions[i].f[j + 1] != undefined) {
                                getRightAnswers += ", ";
                            } else {
                                getRightAnswers += ".";
                            }
                        } else if (questions[i].f[j] == 4) {
                            getRightAnswers += questions[i].d;
                            if (questions[i].f[j + 1] != undefined) {
                                getRightAnswers += ", ";
                            } else {
                                getRightAnswers += ".";
                            }
                        }
                    }
                }
            }
            if (score == 0) {
                score += 100;
            } else {
                score *= 2;
            }
            if (i >= 0) {
                alert("Правильно!\n" + text + getRightAnswers + "\n" +
                    "Вопрос был такой:\n" +
                    questions[i].q + "\n" +
                    questions[i].e + "\n\n" +
                    "Ваш счёт: " + score + " баллов."
                );
            }
        }
    }
    if (allAnswersRight) {
        alert("Вы выйграли!\n" +
            "Вы заработали " + score + " баллов.");
    }
}



function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

showQuestion(questionsAndAnswers);
