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

    add(num) {
      return (result += num);
    },

    subtract(num) {
      return (result -= num);
    },

    multiply(num) {
      return (result *= num);
    },

    divide(num) {
      return (result /= num);
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, num) {
      operation(num);

      return this;
    },
  };
}

module.exports = makeCalculator;
