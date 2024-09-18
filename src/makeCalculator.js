'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const operate = function (callback, value) {
    result = callback(result, value);

    return this;
  };

  function reset() {
    result = 0;

    return this;
  }

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => (b !== 0 ? a / b : result);

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
