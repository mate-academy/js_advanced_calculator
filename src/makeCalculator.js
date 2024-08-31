'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const operate = (callback, num) => {
    result = callback(result, num);

    return calculator;
  };

  const add = (prevResult, num) => {
    return prevResult + num;
  };

  const subtract = (prevResult, num) => {
    return prevResult - num;
  };

  const multiply = (prevResult, num) => {
    return prevResult * num;
  };

  const divide = (prevResult, num) => {
    return prevResult / num;
  };

  const reset = () => {
    result = 0;

    return calculator;
  };

  const calculator = {
    operate,
    add,
    subtract,
    multiply,
    divide,
    reset,
    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
