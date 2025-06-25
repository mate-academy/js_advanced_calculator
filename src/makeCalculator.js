'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
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

  function reset() {
    this.result = 0;

    return this;
  }

  function operate(operation, number) {
    this.result = operation(this.result, number);

    return this;
  }

  const rezultCalculate = {
    operate,
    add,
    subtract,
    multiply,
    divide,
    reset,
  };

  rezultCalculate.result = 0;

  return rezultCalculate;
}

module.exports = makeCalculator;
