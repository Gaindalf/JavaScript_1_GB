//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

chooseTheAnswer(works.a00, works.a1, works.a2, works.a0); // первый вопрос
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        chooseTheAnswer(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                chooseTheAnswer(works.d00, works.d1, works.d2, works.d0)
                break;

            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                chooseTheAnswer(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        chooseTheAnswer(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                chooseTheAnswer(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие
                chooseTheAnswer(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

showTheAnswer();
alert('Спасибо за игру');
console.log(answers);

//------------------------------------------
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

function chooseTheAnswer(text, one, two, number) {
    do {
        ok = false;
        event = +prompt(text + one + two + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(number, event);
            if (ok) {
                answers.push({
                    numberOfWindow: text + one + two,
                    numberOfAnswer: event
                });
            }
        }
    } while (!ok);
}

function showTheAnswer() {
    do {
        ok = false;
        var answer = +prompt("Введите номер вашего ответа");
        if (answer == -1) {
            break;
        }
        else {
            ok = isAnswer(answers.length, answer);
        }
    } while (!ok);
    if (ok) {
        alert(answers[(answer - 1)].numberOfWindow + "\n" +
            answers[(answer - 1)].numberOfAnswer);
    }
}
