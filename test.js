// console.log('Hello world');
// for (let ex = 1; ex < 5; ex++) {
//   console.log(`----- Starting ex ${ex}. `);
//   for (let rep = 1; rep < 5; rep++) {
//     console.log(`Repetition ${rep}.`);
//   }
// }
// const nested = [2, 7, [5, 6]];
// const [y, , [k, p]] = nested;
// console.log(y, k, p);
// const myName = 'Salkinbayev';
// Задачи на циклы
for (let i = 5; i < 11; i++) {
  console.log(i);
};
for (let i = 20; i >= 10; i--) {
  if (i === 13) {
    break;
  }

  console.log(i);
};

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}

numbers = [];
for (let i = 2; i < 10; i++) {
  if (i % 2 === 0) {

    numbers[i - 2] = i;
  }


}
console.log(numbers);

const arr = [1, 2, 3, 4];
const result = [];

for (let i = 0; i < arr.length; i++) {

  result[i] = i * 2;


}
console.log(result);
// Задачи на функции
function sayHello(name) {
  return (`Привет ${name}`);
}
console.log(sayHello('Nora'));

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(8));