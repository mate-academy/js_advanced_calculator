'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const add = (num) => {
    calculator.result += num;

    return calculator;
  };
  const subtract = (num) => {
    calculator.result -= num;

    return calculator;
  };
  const multiply = (num) => {
    calculator.result *= num;

    return calculator;
  };
  const divide = (num) => {
    calculator.result /= num;

    return calculator;
  };
  const reset = () => {
    calculator.result = 0;

    return calculator;
  };
  const operate = (callback, num) => {
    callback(num);

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
