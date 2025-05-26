'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(x, currentResult) {
      return currentResult + x;
    },
    subtract(x, currentResult) {
      return currentResult - x;
    },
    multiply(x, currentResult) {
      return currentResult * x;
    },
    divide(x, currentResult) {
      return currentResult / x;
    },
    operate(operation, value) {
      this.result = operation(value, this.result);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

// const calculator = makeCalculator();

module.exports = makeCalculator;

// calculator.operate(calculator.add, 21);
// console.log(calculator.result);
// calculator.reset();
// console.log(calculator.result);
// calculator
//   .operate(calculator.add, 10)
//   .reset()
//   .operate(calculator.subtract, 20)
//   .operate(calculator.divide, 5)
//   .operate(calculator.multiply, 7);
// console.log(calculator.result);
