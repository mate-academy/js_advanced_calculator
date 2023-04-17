'use strict';

function makeCalculator() {
  let result = 0;

  const add = num => {
    result += num;
  };

  const subtract = num => {
    result -= num;
  };

  const multiply = num => {
    result *= num;
  };

  const divide = num => {
    result /= num;
  };

  const reset = () => {
    result = 0;

    return innerCalculator;
  };

  const operate = (callback, num) => {
    callback(num);

    return innerCalculator;
  };

  const innerCalculator = {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    get result() {
      return result;
    },
  };

  return innerCalculator;
}

module.exports = makeCalculator;
