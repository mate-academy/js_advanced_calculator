'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  let result = 0;

  function add(a) {
    result += a;
  }

  function subtract(a) {
    result -= a;
  }

  function multiply(a) {
    result *= a;
  }

  function divide(a) {
    if (a === 0) {
      result = NaN;

      return;
    }
    result /= a;
  }

  return {
    get result() {
      return result;
    },

    operate(method, num) {
      if (typeof method === 'function') {
        method(num);
      } else {
        return 'Invalid method';
      }

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    add(num) {
      add(num);

      return this;
    },

    subtract(num) {
      subtract(num);

      return this;
    },

    multiply(num) {
      multiply(num);

      return this;
    },

    divide(num) {
      divide(num);

      return this;
    },
  };
}

module.exports = makeCalculator;
