'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let newResult = 0;

  const createCalculator = () => ({
    operate,
    get result() {
      return newResult;
    },
    add,
    subtract,
    multiply,
    divide,
    reset,
  });

  const add = (number) => {
    newResult += number;

    return createCalculator();
  };

  const subtract = (number) => {
    newResult -= number;

    return createCalculator();
  };

  const multiply = (number) => {
    newResult *= number;

    return createCalculator();
  };

  const divide = (number) => {
    if (number === 0) {
      return 'Enter correct number';
    }
    newResult /= number;

    return createCalculator();
  };

  const reset = () => {
    newResult = 0;

    return createCalculator();
  };

  const operate = (action, number) => action(number);

  return createCalculator();
}

module.exports = makeCalculator;
