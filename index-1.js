
// Пункт 1 і 2

const k1 = '5px';
console.log(Number.parseInt(k1));
console.log(Number.parseFloat(k1));

const k2 = '12djd334';
console.log(Number.parseInt(k2));
console.log(Number.parseFloat(k2));

const k3 = '12.45asdwe12';
console.log(Number.parseInt(k3));
console.log(Number.parseFloat(k3));

const k4 = 'qwqweeewq'
console.log(Number.parseInt(k4));
console.log(Number.parseFloat(k4));

// Пункт 3

console.log(Math.max(2,34,99,3,22,36,733,18));
console.log(Math.min(2,34,99,3,22,36,733,18));

// Пункт 4

console.log(Math.random() * (19 - 3) + 1);

// Пункт 5

const result = 5+5+"5";
console.log(typeof result);

// Пункт 6

const email = 'vnpotomko@gmail.com' ;
console.log(email.includes('@'));

// Пункт 7

const my = 'my';
const name = 'name';
const is = 'is';
const fullName = 'my' + 'name' + 'is' + 'Victor';
console.log(fullName);

// Пункт 8

const userName = 'Ira';
const payment = 42500;
alert('Дякуємо, Іро! До сплати ' + payment + ' гривень');