'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(current, value) {
      return current + value;
    },
    subtract(current, value) {
      return current - value;
    },
    multiply(current, value) {
      return current * value;
    },
    divide(current, value) {
      if (value === 0) {
        throw new Error('Divisão por zero não é permitida');
      }

      return current / value;
    },
    operate(callback, number) {
      const newResult = callback(this.result, number);

      this.result = newResult;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
