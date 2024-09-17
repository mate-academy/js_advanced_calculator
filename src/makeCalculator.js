'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    result: 0,
  };
}

function operate(callback, number) {
  callback(this, number);

  return this;
}

function add(object, number) {
  object.result += number;
}

function subtract(object, number) {
  object.result -= number;
}

function multiply(object, number) {
  object.result *= number;
}

function divide(object, number) {
  object.result /= number;
}

function reset() {
  this.result = 0;

  return this;
}

module.exports = makeCalculator;
