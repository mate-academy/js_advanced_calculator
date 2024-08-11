'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    operate(operation, num) {
      operation(num);

      return obj;
    },

    add(x) {
      obj.result += x;

      return obj;
    },

    subtract(x) {
      obj.result -= x;

      return obj;
    },

    divide(x) {
      obj.result /= x;

      return obj;
    },

    multiply(x) {
      obj.result *= x;

      return obj;
    },

    reset() {
      obj.result = 0;

      return obj;
    },
  };

  return obj;
}

module.exports = makeCalculator;
