'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add(current, number) {
      return current + number;
    },
    subtract(current, number) {
      return current - number;
    },
    multiply(current, number) {
      return current * number;
    },
    divide(current, number) {
      return current / number;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

// const calculator = makeCalculator();

// calculator
//   .operate(calculator.add, 10)
//   .operate(calculator.subtract, 20)
//   .operate(calculator.divide, 5)
//   .operate(calculator.multiply, 7);

module.exports = makeCalculator;
