'use strict';

/**
 * @return {object}
 */
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

function makeCalculator() {
  const calculate = {
    result: 0,
    add,
    subtract,
    multiply,
    divide,
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
