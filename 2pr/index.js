// Завдання 1. Перевірка віку користувача
const age = Number(prompt("Введіть ваш вік:"));

if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age <= 65) {
    alert("Ласкаво просимо!");
} else {
    alert("Будь ласка, будьте обережні!");
}

// Завдання 2. Виведення парних чисел

const n1 = Number(prompt("Введіть число n:"));

for (let i = 2; i <= n1; i += 2) {
    console.log(i);
}

console.log("Task 3. Факторіал");
// Завдання 3. Обчислення факторіалу числа

const n2 = Number(prompt("Введіть число n для обчислення факторіалу:"));
let factorial = 1;
let i = 1;

while (i <= n2) {
    factorial *= i;
    i++;
}

console.log(factorial);

// Завдання 4. Калькулятор

const a = Number(prompt("Калькулятор! Введіть перше число:"));
const b = Number(prompt("Калькулятор! Введіть друге число:"));
const op = prompt("Калькулятор! Введіть операцію (+, -, *, /):");
let result;

switch (op) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Ділення на нуль неможливе";
        break;
    default:
        result = "Невідома операція";
}

alert(result);


// Завдання 5. Гра "Вгадай число"
const secret = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = Number(prompt("Вгадайте число від 1 до 100:"));

    if (guess < secret) {
        alert("Загадане число більше");
    } else if (guess > secret) {
        alert("Загадане число менше");
    } else {
        alert("console.log(x);Вітаємо! Ви вгадали число!");
    }
} while (guess !== secret);

console.log("Task 3. НСВ")
// Додаткове завдання. Пошук найбільшого спільного дільника

let x = Number(prompt("НСД. Введіть перше число:"));
let y = Number(prompt("НСД. Введіть друге число:"));

while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}

console.log(x);
