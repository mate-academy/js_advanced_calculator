'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callBack, value) {
      return callBack.call(this, value);
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    add(value) {
      calculator.result += value;

      return this;
    },
    subtract(value) {
      calculator.result -= value;

      return this;
    },
    divide(value) {
      if (value !== 0) {
        calculator.result /= value;
      }

      return this;
    },
    multiply(value) {
      calculator.result *= value;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
