
// Пункт 1 

const k1 = Number.parseInt('5px');
console.log(k1);

const k2 = Number.parseInt('12djd334');
console.log(k2);

const k3 = Number.parseInt ('12.45asdwe12');
console.log(k3);

const k4 = Number.parseInt('qwqweeewq');
console.log(k4);

// Пункт 2

const k5 = Number.parseFloat('5px');
console.log(k5);

const k6 = Number.parseFloat('12djd334');
console.log(k6);

const k7 = Number.parseFloat ('12.45asdwe12');
console.log(k7);

const k8 = Number.parseFloat('qwqweeewq');
console.log(k8);

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