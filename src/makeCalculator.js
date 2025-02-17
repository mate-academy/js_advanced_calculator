'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    operate(operation, value) {
      if (typeof operation === 'function') {
        operation(value);
      }

      return this;
    },

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
      if (value !== 0) {
        obj.result /= value;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
