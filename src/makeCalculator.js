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
    reset,
    operate,
  };

  return calculator;
}

function add(currentResult, additionalValue) {
  return currentResult + additionalValue;
}

function subtract(currentResult, additionalValue) {
  return currentResult - additionalValue;
}

function multiply(currentResult, additionalValue) {
  return currentResult * additionalValue;
}

function divide(currentResult, additionalValue) {
  return currentResult / additionalValue;
}

function reset() {
  this.result = 0;

  return this;
}

function operate(callback, number) {
  this.result = callback(this.result, number);

  return this;
}

module.exports = makeCalculator;
