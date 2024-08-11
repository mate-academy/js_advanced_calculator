'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    operate(operation = obj.result, num) {
      operation(num);

      return obj;
    },

    add(x) {
      obj.result += x;
    },

    subtract(x) {
      obj.result -= x;
    },

    divide(x) {
      obj.result /= x;
    },

    multiply(x) {
      obj.result *= x;
    },

    reset() {
      obj.result = 0;

      return obj;
    },
  };

  return obj;
}

module.exports = makeCalculator;
