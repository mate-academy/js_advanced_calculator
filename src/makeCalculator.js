'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add,
    subtract,
    multiply,
    divide,
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return calculator;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = makeCalculator;
