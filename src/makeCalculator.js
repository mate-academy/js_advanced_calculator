'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const add = (number) => {
    result += number;
  };

  const subtract = (number) => {
    result -= number;
  };

  const multiply = (number) => {
    result *= number;
  };

  const divide = (number) => {
    if (number === 0) {
      throw new Error('Division by zero is not allowed');
    }
    result /= number;
  };

  function reset() {
    result = 0;

    return this;
  }

  function operate(callback, number) {
    callback(number);

    return this;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
