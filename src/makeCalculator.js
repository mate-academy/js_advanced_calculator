'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;
  const add = (b) => (result += b);
  const subtract = (b) => (result -= b);
  const multiply = (b) => (result *= b);
  const divide = (b) => (result /= b);
  const operate = (operation, value) => {
    operation(value);

    return calculator;
  };

  const reset = () => {
    result = 0;

    return calculator;
  };

  const calculator = {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
  };

  return calculator;
}

module.exports = makeCalculator;
