'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    operate(callBack, number) {
      result = callBack(result, number);

      return this;
    },

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
