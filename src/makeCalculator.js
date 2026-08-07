'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, amount) {
      this.result = operation(this.result, amount);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(value1, value2) {
      return value1 + value2;
    },

    subtract(value1, value2) {
      return value1 - value2;
    },

    multiply(value1, value2) {
      return value1 * value2;
    },

    divide(value1, value2) {
      return value1 / value2;
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.subtract, 20);

module.exports = makeCalculator;
