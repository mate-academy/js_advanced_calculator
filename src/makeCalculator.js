'use strict';

/**
 * @return {object}
 */
function makeCalculator() {

  const calculator = {
    result: 0,

    add(num) {
      calculator.result += num;
    },

    subtract(num) {
      calculator.result -= num;
    },

    divide(num) {
      calculator.result /= num;
    },

    multiply(num) {
      calculator.result *= num;
    },

    operate(action, num) {
      action(num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
