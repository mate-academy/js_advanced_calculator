'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    reset: () => {
      obj.result = 0;

      return obj;
    },

    add(number) {
      obj.result += number;

      return obj;
    },

    subtract(number) {
      obj.result -= number;

      return obj;
    },

    multiply(number) {
      obj.result *= number;

      return obj;
    },

    divide(number) {
      obj.result /= number;

      return obj;
    },

    operate: (operation, number) => {
      operation(number);

      return obj;
    },
  };

  return obj;
}

module.exports = makeCalculator;
