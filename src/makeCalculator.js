'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const add = (current, number) => current + number;
  const subtract = (current, number) => current - number;
  const multiply = (current, number) => current * number;
  const divide = (current, number) => current / number;

  function operate(callback, number) {
    const current = result;
    const newResult = callback(current, number);

    result = newResult;

    return this;
  }

  function reset() {
    result = 0;

    return this;
  }

  const calculator = {
    get result() {
      return result;
    },

    add,
    subtract,
    multiply,
    divide,
    operate,
    reset,
  };

  return calculator;
}

module.exports = makeCalculator;
