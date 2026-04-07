'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      return callback(number, this);
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number, object) {
      object.result += number;

      return object;
    },

    subtract(number, object) {
      object.result -= number;

      return object;
    },

    multiply(number, object) {
      object.result *= number;

      return object;
    },

    divide(number, object) {
      object.result /= number;

      return object;
    },
  };
}

module.exports = makeCalculator;
