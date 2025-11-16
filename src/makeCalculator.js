'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(current, value) {
      return current + value;
    },

    subtract(current, value) {
      return current - value;
    },

    multiply(current, value) {
      return current * value;
    },

    divide(current, value) {
      return current / value;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this; // allow chaining
    },

    reset() {
      this.result = 0;

      return this; // allow chaining
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);
calculator.reset();

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7);

module.exports = makeCalculator;
