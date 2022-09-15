console.log('Hello world');
for (let ex = 1; ex < 5; ex++) {
  console.log(`----- Starting ex ${ex}. `);
  for (let rep = 1; rep < 5; rep++) {
    console.log(`Repetition ${rep}.`);
  }
}
const nested = [2, 7, [5, 6]];
const [y, , [k, p]] = nested;
console.log(y, k, p);
const myName = 'Salkinbayev';