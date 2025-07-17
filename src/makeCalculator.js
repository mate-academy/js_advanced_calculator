'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    add(result, value) {
      return result + value;
    },

    subtract(result, value) {
      return result - value;
    },

    multiply(result, value) {
      return result * value;
    },

    divide(result, value) {
      return result / value;
    },
  };
}

// const calculator = makeCalculator();

// calculator.operate(calculator.add, 21);

// console.log(calculator.result); // 21

// calculator.reset();
// console.log(calculator.result); // 0

// calculator
//   .operate(calculator.add, 10)
//   .reset()
//   .operate(calculator.subtract, 20)
//   .operate(calculator.divide, 5)
//   .operate(calculator.multiply, 7);

// console.log(calculator.result); // -28

module.exports = makeCalculator;
