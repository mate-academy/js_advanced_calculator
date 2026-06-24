'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(call, val) {
      calculator.result = call(val);

      return calculator;
    },

    add(value) {
      return calculator.result + value;
    },

    subtract(value) {
      return calculator.result - value;
    },

    multiply(value) {
      return calculator.result * value;
    },

    divide(value) {
      return calculator.result / value;
    },

    reset(value) {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}
module.exports = makeCalculator;
