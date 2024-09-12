'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(obj, value) {
      obj.result += value;
    },

    subtract(obj, value) {
      obj.result -= value;
    },

    multiply(obj, value) {
      obj.result *= value;
    },

    divide(obj, value) {
      obj.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operator, value) {
      operator(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
