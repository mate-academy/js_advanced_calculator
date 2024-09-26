'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate: operate,
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

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
  };

  function operate(callback, num) {
    calculator.result = callback(calculator.result, num);

    return calculator;
  }

  return calculator;
}

module.exports = makeCalculator;
