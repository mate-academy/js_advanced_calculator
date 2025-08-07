'use strict';

/**
 * @return {object}
 */
// function makeCalculator() {
//   return {
//     result: 0,
//     add(value) {
//       this.result += value;
//     },
//     subtract(value) {
//       this.result -= value;
//     },
//     multiply(value) {
//       this.result *= value;
//     },
//     divide(value) {
//       this.result /= value;
//     },
//     reset() {
//       this.result = 0;

//       return this;
//     },
//     operate(callback, value) {
//       callback.call(this, value);

//       return this;
//     },
//   };
// }

function makeCalculator() {
  const calculator = {
    result: 0,
    add(value) {
      calculator.result += value;
    },
    subtract(value) {
      calculator.result -= value;
    },
    multiply(value) {
      calculator.result *= value;
    },
    divide(value) {
      calculator.result /= value;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    operate(callback, number) {
      callback(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
