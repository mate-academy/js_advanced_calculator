'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  return {
    get result() {
      return result;
    },
    add(num) {
      result += num;

      return this;
    },
    subtract(num) {
      result -= num;

      return this;
    },
    multiply(num) {
      result *= num;

      return this;
    },
    divide(num) {
      if (num !== 0) {
        result /= num;
      } else {
        // eslint-disable-next-line no-console
        console.error('Cannot divide by zero');
      }
    },
    operate(callback, num) {
      if (typeof callback !== 'function') {
        // eslint-disable-next-line no-console
        console.error('The provided callback is not a valid function.');

        return this;
      }

      callback(num);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
