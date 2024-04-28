'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },
    operate(action, value) {
      action(value);

      return this;
    },
    add(value) {
      result += value;

      return this;
    },
    subtract(value) {
      result -= value;

      return this;
    },
    multiply(value) {
      result *= value;

      return this;
    },
    divide(value) {
      if (value > 0) {
        result /= value;
      }

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
