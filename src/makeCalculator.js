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

    multiply(num) {
      calculator.result *= num;
    },

    divide(num) {
      calculator.result /= num;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callBack, num) {
      callBack(num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
