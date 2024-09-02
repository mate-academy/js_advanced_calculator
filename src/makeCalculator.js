'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
    add(value) {
      result += value;
    },
    subtract(value) {
      result -= value;
    },
    multiply(value) {
      result *= value;
    },
    divide(value) {
      if (value === 0) {
        throw new Error('Can`t divide by zero!');
      } else {
        result /= value;
      }
    },
    reset() {
      result = 0;

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
