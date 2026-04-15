<?php
//  ВАРІАНТ 1
// Ініціалізація / Initialisierung
$name = "Анастасія";
$age = 19;
$is_student = true;

// Виведення речення
echo "Мене звати $name, мені $age років. Студент: " . ($is_student ? "Так" : "Ні") . ".<br>";

// Масив та сума  / Array und Summe
$numbers = [1, 2, 3, 4, 5];
echo "Сума масиву: " . array_sum($numbers) . "<br>";

// Асоціативний масив у HTML-списку [cite: 13] / Assoziatives Array in HTML-Liste
$user = ["name" => $name, "email" => "nastia@it.ua", "phone" => "+380..."];
echo "<ul>";
foreach ($user as $key => $val) { echo "<li>$key: $val</li>"; }
echo "</ul>";

// Перевірка віку  / Altersprüfung
if ($age > 18) { echo "Повнолітня особа.<br>"; }

// Шкала оцінок  / Bewertungsskala
$grade = rand(0, 100); // Використовуємо rand(), щоб уникнути помилки "Condition is always true"
echo "Оцінка $grade: ";
if ($grade >= 90) echo "Відмінно";
elseif ($grade >= 70) echo "Добре";
elseif ($grade >= 50) echo "Задовільно";
else echo "Незадовільно";
echo "<hr>";

//  ВАРІАНТ 2
$a = 5; $b = 10;
echo "Результати: " . ($a+$b) . ", " . ($a-$b) . ", " . ($a*$b) . ", " . ($a/$b) . "<br>";

$week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
echo "3-й день: $week[2], 5-й день: $week[4]<br>";

$catalog = ["Apple" => 30, "Milk" => 40];
foreach ($catalog as $prod => $price) { echo "$prod: $price грн; "; }

$day = "Monday";
switch ($day) {
    case "Monday": echo "<br>Початок тижня."; break;
    default: echo "<br>Робочий день.";
}

$x = 15;
echo "<br>Число $x є " . ($x % 2 == 0 ? "парним" : "непарним") . ".<hr>";

// ВАРІАНТ 3
$items = [150.50, 200, 180];
$total = array_sum($items);
if ($total > 500) $total *= 0.9; // Знижка 10%
echo "До сплати: $total грн<br>";

$movies = ["Interstellar", "Inception", "Matrix", "Tenet", "Dune"];
foreach ($movies as $m) { echo "$m • "; }

$auth = ["login" => "nastia_dev", "password" => "pass123", "email" => "n@it.ua"];
// Перевірка логіна  / Login-Prüfung
if ($auth['login'] === "nastia_dev" && $auth['password'] === "pass123") {
    echo "<br>Вхід виконано.<hr>";
}

// ВАРІАНТ 4
$v1 = 42; $v2 = 7;
echo "Max: " . ($v1 > $v2 ? $v1 : $v2) . "<br>";

$data = [10, 20, 30, 45];
echo "Середнє: " . (array_sum($data)/count($data)) . "<br>";

$students = ["Оля" => 95, "Іван" => 70, "Макс" => 82];
foreach ($students as $s => $ball) {
    if ($ball > 80) echo "Топ-студент: $s ($ball)<br>";
}

$num = 12;
if ($num % 3 == 0 || $num % 5 == 0) echo "Число кратне 3 або 5.<br>";

for ($i = 1; $i <= 10; $i++) { echo "7 * $i = " . (7 * $i) . " | "; }
echo "<hr>";

// ВАРІАНТ 5
$f_name = "Анастасія"; $l_name = "IT"; $year = 2008;
echo "ПІБ: $f_name $l_name, Вік: " . (date("Y") - $year) . "<br>";

$states = ["Україна", "Німеччина", "Франція", "Іспанія"];
foreach ($states as $st) { echo "<li>$st</li>"; }
echo "</ol>";

$geo = ["Kyiv" => 2800000, "Lutsk" => 217000];
foreach ($geo as $city => $p) {
    if ($p > 1000000) echo "Мегаполіс: $city ($p)<br>";
}

$test_n = 8;
echo ($test_n % 2 == 0 ? "Парне" : "Непарне") . "<br>";

$current_y = (int)date("Y");
if ($current_y % 4 == 0) echo "$current_y — високосний рік.";
else echo "$current_y — звичайний рік.";