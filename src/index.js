const add = require('./add');
const sub = require('./sub');
const mul = require('./mul');
const paramA = 10;
const paramB = 20;

console.log(`add: ${add(paramA, paramB)}`);
console.log(`sub: ${sub(paramA, paramB)}`);
console.log(`mul: ${mul(paramA, paramB)}`);
