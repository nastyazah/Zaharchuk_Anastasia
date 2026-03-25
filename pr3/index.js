// Варіант 1
const numbers = [34, 7, 23, 32, 5, 62, 14, 19, 45, 11];

const average1 = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const sorted = [...numbers].sort((a, b) => a - b);

console.log(" Варіант 1");
console.log("Масив:", numbers);
console.log("Середнє:", average1);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований:", sorted);


// Варіант 2
const users = [
    { name: "Олег", age: 17 },
    { name: "Марія", age: 23 },
    { name: "Іван", age: 15 },
    { name: "Катерина", age: 30 },
    { name: "Дмитро", age: 19 },
    { name: "Аліна", age: 16 },
];

const adults = users.filter(u => u.age > 18);
const names = adults.map(u => u.name);
const averageAge = adults.reduce((sum, u) => sum + u.age, 0) / adults.length;

console.log("\n=== Варіант 2 ===");
console.log("Користувачі старше 18:", adults);
console.log("Імена:", names);
console.log("Середній вік:", averageAge);


// Варіант 3
const products = [
    { name: "Яблуко", category: "Фрукти" },
    { name: "Молоко", category: "Молочні" },
    { name: "Груша", category: "Фрукти" },
    { name: "Сир", category: "Молочні" },
    { name: "Банан", category: "Фрукти" },
    { name: "Хліб", category: "Випічка" },
    { name: "Батон", category: "Випічка" },
];

const grouped = {};
for (const product of products) {
    if (!grouped[product.category]) grouped[product.category] = [];
    grouped[product.category].push(product.name);
}

console.log("\n=== Варіант 3 ===");
for (const category in grouped) {
    console.log(`${category}: ${grouped[category].join(", ")}`);
}


// Варіант 4
const students = {
    Андрій: { математика: 85, фізика: 90, хімія: 78 },
    Софія: { математика: 92, фізика: 88, хімія: 95 },
    Марк: { математика: 70, фізика: 65, хімія: 80 },
    Вікторія: { математика: 98, фізика: 94, хімія: 91 },
};

console.log("\n=== Варіант 4 ===");
for (const student in students) {
    const grades = students[student];
    let sum = 0;
    let count = 0;
    for (const subject in grades) {
        sum += grades[subject];
        count++;
    }
    const avg = sum / count;
    console.log(`${student}: середній бал — ${avg.toFixed(2)}`);
}


// Варіант 5
const names2 = ["Олена", "Богдан", "Христина", "Ярослав", "Ніна"];

const nameLengths = names2.reduce((obj, name) => {
    obj[name] = name.length;
    return obj;
}, {});

console.log("\n=== Варіант 5 ===");
console.log(nameLengths);