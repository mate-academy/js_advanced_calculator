'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let internalResult = 0;

  const calculator = {
    get result() {
      return internalResult;
    },
    operate(func, number) {
      internalResult = func(internalResult, number);

      return this;
    },
    add(current, number) {
      return current + number;
    },
    subtract(current, number) {
      return current - number;
    },
    divide(current, number) {
      return current / number;
    },
    multiply(current, number) {
      return current * number;
    },
    reset() {
      internalResult = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
