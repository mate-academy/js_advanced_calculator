'use strict';

/**
 * @return {object}
 */
// function makeCalculator() {
//   // write code here
//   return {
//     result: 0,
//     add(number) {
//       this.result += number;

//       return this;
//     },
//     subtract(number) {
//       this.result -= number;

//       return this;
//     },
//     multiply(number) {
//       this.result *= number;

//       return this;
//     },
//     divide(number) {
//       this.result /= number;

//       return this;
//     },
//     reset() {
//       this.result = 0;

//       return this;
//     },
//     operate(operation, number) {
//       return operation.call(this, number);
//     },
//   };
// }
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
