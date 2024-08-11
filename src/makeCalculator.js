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

    add: (num) => {
      result += num;

      return this;
    },

    subtract: (num) => {
      result -= num;

      return this;
    },

    multiply: (num) => {
      result *= num;

      return this;
    },

    divide: (num) => {
      result /= num;

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, num) {
      operation.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
