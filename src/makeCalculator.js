'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(currentValue, value) {
      return currentValue + value;
    },

    subtract(currentValue, value) {
      return currentValue - value;
    },

    multiply(currentValue, value) {
      return currentValue * value;
    },

    divide(currentValue, value) {
      return currentValue / value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;

// const calculator = makeCalculator();
// calculator.operate(calculator.add, 21);
// console.log(calculator); // 21
// calculator.reset();
// console.log(calculator.result); // 0

// calculator
//   .operate(calculator.add, 10)
//   .reset()
//   .operate(calculator.subtract, 20)
//   .operate(calculator.divide, 5)
//   .operate(calculator.multiply, 7);

// console.log(calculator.result); // -28
