var books = ["hablu", "bolod", "choddogusti", "battery", "peracitamol", "gymnasiam"];

var batteryIndex = books.indexOf("battery"); // 0, 1, 2.... 0 theke index gunte hoy
// console.log(batteryIndex);

var numbers = [23, 45, 67, 23, 56, 89];
var indexNums = numbers.indexOf(67);
var index = numbers.indexOf(673); // array te na thakle -1
// console.log(index);

var secondIndex = books[2];
// console.log(secondIndex); // index number diye khuje na pawa gele undefined

console.log(numbers);
numbers[1] = 145;
numbers[4] = 44;
console.log(numbers);