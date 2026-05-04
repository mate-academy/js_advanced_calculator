'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  const add = (current, number) => current + number;
  const sub = (current, number) => current - number;
  const mul = (current, number) => current * number;
  const div = (current, number) => current / number;

  const operate = (callback, number) => {
    result = callback(result, number);
    calculator.result = result;

    return calculator;
  };

  const reset = () => {
    result = 0;
    calculator.result = result;

    return calculator;
  };

  const calculator = {
    result: 0,
    add,
    sub,
    mul,
    div,
    operate,
    reset,
  };

  return calculator;
}

module.exports = makeCalculator;
