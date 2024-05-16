'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operate, num) {
      this.result = operate(num);

      return this;
    },

    add(num) {
      calculator.result += num;

      return calculator.result;
    },

    subtract(num) {
      calculator.result -= num;

      return calculator.result;
    },

    multiply(num) {
      calculator.result *= num;

      return calculator.result;
    },

    divide(num) {
      calculator.result /= num;

      return calculator.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
