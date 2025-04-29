'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // let result = 0;

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const reset = () => {
    calculator.result = 0;

    return calculator;
  };

  const operate = (callback, value) => {
    calculator.result = callback(calculator.result, value);

    return calculator;
  };

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

module.exports = makeCalculator;
