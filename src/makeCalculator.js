'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  // Helper function to perform operations
  const operate = (callback, number) => {
    result = callback(result, number);
    return calculator;
  };

  // Methods for basic operations
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  // Reset method to set result back to 0
  const reset = () => {
    result = 0;
    return calculator;
  };

  // Return the object with methods
  const calculator = {
    result: result,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    operate: operate,
    reset: reset
  };

  return calculator;
}

module.exports = makeCalculator;
