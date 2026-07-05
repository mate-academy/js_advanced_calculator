'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  let result = 0;

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const operate = function (callback, num) {
    result = callback(result, num);

    return this;
  };

  const reset = function () {
    result = 0;

    return this;
  };

  return {
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
}

module.exports = makeCalculator;
