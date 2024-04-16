'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      this.result += num;
    },

    subtract(num) {
      calculator.result -= num;
    },

    multiply(num) {
      calculator.result *= num;
    },

    divide(num) {
      calculator.result /= num === 0 ? 1 : num;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callBack, num) {
      callBack.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
