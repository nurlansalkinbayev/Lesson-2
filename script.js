// 'use strict';
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   year: [],
//   privat: false
// };
// const a = prompt('Один из просмотренных фильмов', '');
// const b = +prompt('На сколько оцените его?', '');
// const c = prompt('Один из просмотренных фильмов', '');
// const d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



const dataBeforeSide = +prompt('Введите данные :', '');
const dataAfterSide = +prompt('Введите данные :', '');
const currentLoad = +prompt('Введите  нагрузку котла:', '');
function dataOxygen(dataBeforeSide, dataAfterSide, currentLoad) {
  let calcOxygenBefore = 21 / (21 - dataBeforeSide);
  let calcOxygenAfter = 21 / (21 - dataAfterSide);
  let diffBetween = calcOxygenAfter - calcOxygenBefore;
  let dataOxygen = (diffBetween * (currentLoad / 220)) * 100;
  console.log(`Присосы по газовоздушному тракту составляют ${Math.round(dataOxygen)} %`);
  return dataOxygen;
}



