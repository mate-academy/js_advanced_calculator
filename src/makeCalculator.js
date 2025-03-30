'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const operate = function (callback, number) {
    callback(number);

    return this;
  };

  const reset = function () {
    result = 0;

    return this;
  };

  const add = function (number) {
    result += number;
  };

  const subtract = function (number) {
    result -= number;
  };

  const multiply = function (number) {
    result *= number;
  };

  const divide = function (number) {
    if (number !== 0) {
      result /= number;
    } else {
      throw new Error('Division by zero');
    }
  };

  return {
    get result() {
      return result;
    },
    operate,
    reset,
    add,
    subtract,
    multiply,
    divide,
  };
}

module.exports = makeCalculator;
