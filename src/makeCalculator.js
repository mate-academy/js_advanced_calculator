'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;
  const ensureNumber = (value) => {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('Value must be a valid number');
    }
  };
  const add = (b) => {
    ensureNumber(b);
    result += b;
  };
  const subtract = (b) => {
    ensureNumber(b);
    result -= b;
  };
  const multiply = (b) => {
    ensureNumber(b);
    result *= b;
  };
  const divide = (b) => {
    ensureNumber(b);

    if (b === 0) {
      throw new Error('Division by zero');
    }
    result /= b;
  };
  const operate = (operation, value) => {
    if (typeof operation !== 'function') {
      throw new Error('Operation must be a function');
    }

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
