

// // import { fizzBuzz } from './funct.js';
// // import { isLandscape, maxNumber } from './additionalFunct.js';
// // import { checkSpeed } from './checkSpeed.js';

// // let result = fizzBuzz();
// // console.log(result);

// // console.log(isLandscape(100,90));
// // console.log(maxNumber(10100,10000));
// // console.log(checkSpeed(70));

// import { countTruthy } from './countTruthy.js';
// const value = [NaN, 1, 0, 2, 's', null];
// console.log(countTruthy(value));

// import { showProperties } from './showProperties.js';
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b',
//     actor1: 'sap',
//     actor2: 'mimi',
//     supportingActor: 'navi'
// };

// showProperties(movie);

// import { sum } from './sum.js';
// console.log(sum(20));

//3,5,6,9,10,12,15,18,20

//Note: solve - calculateGrade, showStarts, primeNumbers

// import { mapArr } from '../ArraySessions/mapArray.js';
// const numbers = [0, -1, 3, -4, 5, 8];
// // make this work later. instead of arrays pass an object and try to filter
// // const arrayObj = [
// //     {id:1, name:'sapna'},
// //     {id:2, name:'mimi'},
// //     {id:-3, name:'navi'},
// // ];

// console.log(numbers, mapArr(numbers));

import { reduceArr } from '../ArraySessions/reduceArray.js';
const numbers = [0, -1, 3, -4, 5, 8];
console.log(numbers, reduceArr(numbers));


