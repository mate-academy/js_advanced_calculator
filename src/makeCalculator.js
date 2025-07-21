'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,
    add,
    subtract,
    multiply,
    divide,
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
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
