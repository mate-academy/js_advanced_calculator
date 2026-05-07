'use strict';

/**
 * @return {object}
 *
 */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function makeCalculator() {
  return {
    result: 0,
    add,
    subtract,
    multiply,
    divide,
    operate(callback, number) {
      const newResult = callback(this.result, number);

      this.result = newResult;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
  // write code here
}

module.exports = makeCalculator;
