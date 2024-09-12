'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const mathOperation = {
    result: 0,

    add: (x) => {
      mathOperation.result += x;
    },

    subtract: (x) => {
      mathOperation.result -= x;
    },

    multiply: (x) => {
      mathOperation.result *= x;
    },

    divide: (x) => {
      mathOperation.result /= x;
    },

    reset: (x) => {
      mathOperation.result = 0;

      return mathOperation;
    },

    operate(operation, x) {
      operation(x);

      return mathOperation;
    },
  };

  return mathOperation;
}

module.exports = makeCalculator;
