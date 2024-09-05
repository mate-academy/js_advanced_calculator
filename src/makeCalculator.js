'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  function add(n) {
    calculator.result += n;
  }

  function subtract(n) {
    calculator.result -= n;
  }

  function multiply(n) {
    calculator.result *= n;
  }

  function divide(n) {
    calculator.result /= n;
  }

  function reset() {
    calculator.result = 0;

    return this;
  }

  function operate(callback, n) {
    if (typeof callback === 'function') {
      callback(n);
    }

    return this;
  }

  const calculator = {
    result: 0,
    operate,
    add,
    subtract,
    multiply,
    divide,
    reset,
  };

  return calculator;
}

module.exports = makeCalculator;
