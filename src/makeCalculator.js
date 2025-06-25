'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const result = 0;

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

  function reset(a) {
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
    result,
  };

  return rezultCalculate;
}

module.exports = makeCalculator;
