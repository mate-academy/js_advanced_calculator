'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function add(a) {
    return (result += a);
  }

  function subtract(a) {
    return (result -= a);
  }

  function multiply(a) {
    return (result *= a);
  }

  function divide(a) {
    if (a === 0) {
      return;
    }

    return (result /= a);
  }

  return {
    get result() {
      return result;
    },

    operate(method, num) {
      method(num);

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
