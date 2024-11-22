'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(param) {
      calculator.result += param;
    },

    subtract(param) {
      calculator.result -= param;
    },

    multiply(param) {
      calculator.result *= param;
    },

    divide(param) {
      calculator.result /= param;
    },

    reset() {
      this.result = 0;

      return calculator; // Додаємо можливість chaining
    },

    operate(callback, param) {
      callback(param);

      return calculator; // Додаємо можливість chaining
    },
  };

  return calculator;
}

module.exports = makeCalculator;
