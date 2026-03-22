//Завдання 1
let intNum = 10;
let floatNum = 5.5;
let str = "JS";
let bool = true;

console.log(typeof intNum, typeof floatNum, typeof str, typeof bool);

intNum = 20;
str = "Svelte";
bool = false;

console.log(typeof intNum, typeof str, typeof bool);

console.log("Конкатенація:", intNum + str);      // "20Svelte" (число -> рядок)
console.log("True в число:", Number(true));      // 1
console.log("False в число:", Number(false));    // 0
console.log("Рядок в число:", Number("123"));
console.log("Рядок в число:", String(123)); // 123

const user = {
    id: 1,
    username: "Nastia",
    isStudent: true,
    score: 95.5
};

console.log(JSON.stringify(user));

//Завдання 2
const a = Number(prompt("Введіть перше число:"));
const b = Number(prompt("Введіть друге число:"));
const c = Number(prompt("Введіть третє число:"));

const average = (a + b + c) / 3;
console.log("Середнє арифметичне:", average);
console.log("Модуль числа a:", Math.abs(a));
console.log("Округлення в більшу сторону (середнє):", Math.ceil(average));
console.log("Округлення в меншу сторону (середнє):", Math.floor(average));
console.log("a у степені b:", Math.pow(a, b));
const divisor = 5;
console.log(`Чи ділиться сума (${a+b+c}) на ${divisor} без залишку?`, (a + b + c) % divisor === 0);
const canExist = (a + b > c) && (a + c > b) && (b + c > a);
console.log("Чи може існувати трикутник з такими сторонами?", canExist);

//Завдання 3
const a1 = Number(prompt("Введіть перше число:"));
const b1 = Number(prompt("Введіть друге число:"));
const c1 = Number(prompt("Введіть третє число:"));

const max = Math.max(a1, b1, c1);
const min = Math.min(a1, b1, c1);
console.log("Найбільше:", max, "Найменше:", min);

const hasEven = (a1 % 2 === 0) || (b1 % 2 === 0) || (c1 % 2 === 0);
console.log("Хоча б одне парне:", hasEven);

const complexCondition = (a1 > b1) && (b1 < c1);
console.log("Складна умова (a1 > b1 && b1 < c1):", complexCondition);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(`Чи є число ${a1} простим:`, isPrime(a1));
console.log(`Чи є число ${b1} простим:`, isPrime(b1));
console.log(`Чи є число ${c1} простим:`, isPrime(c1));

//Завдання 4
const name = prompt("Введіть ваше ім'я:");
const birthYear = Number(prompt("Введіть рік народження:"));
const city = prompt("Введіть ваше місто:");

const currentYear = 2026;
const age = currentYear - birthYear;

let group;
if (age < 12) group = "дитина";
else if (age < 18) group = "підліток";
else if (age < 60) group = "дорослий";
else group = "літня людина";

const capital = "Київ";
const isCapital = city.toLowerCase() === capital.toLowerCase()
    ? "Ви живете у столиці."
    : "Ви живете не у столиці.";

console.log(`Ім'я: ${name}, Вік: ${age}, Група: ${group}`);
console.log(isCapital);