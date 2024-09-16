'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    reset() {
      calculator.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },

    result: 0,

    add: (a, b) => {
      return a + b;
    },

    subtract: (a, b) => {
      return a - b;
    },

    multiply: (a, b) => {
      return a * b;
    },

    divide: (a, b) => {
      return a / b;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
