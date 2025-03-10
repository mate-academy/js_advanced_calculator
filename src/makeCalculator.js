'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function add(a) {
    result += a;

    return this;
  }

  function subtract(a) {
    result -= a;

    return this;
  }

  function multiply(a) {
    result *= a;

    return this;
  }

  function divide(a) {
    result /= a;

    return this;
  }

  function reset() {
    result = 0;

    return this;
  }

  function operate(operation, a) {
    operation(a);

    return this;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
