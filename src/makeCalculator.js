'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    add(value) {
      obj.result += value;
    },

    subtract(value) {
      obj.result -= value;
    },

    multiply(value) {
      obj.result *= value;
    },

    divide(value) {
      obj.result /= value;
    },

    reset() {
      obj.result = 0;

      return obj;
    },

    operate(operation, value) {
      operation(value);

      return obj;
    },
  };

  return obj;
}

module.exports = makeCalculator;
