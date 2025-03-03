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
    operate(func, numbers) {
      func(numbers);

      return this;
    },
    add(numbers) {
      internalResult += numbers;
    },
    subtract(numbers) {
      internalResult -= numbers;
    },
    divide(numbers) {
      internalResult /= numbers;
    },
    multiply(numbers) {
      internalResult *= numbers;
    },
    reset() {
      internalResult = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
