'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      callback(this, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(object, value) {
      object.result += value;
    },
    subtract(object, value) {
      object.result -= value;
    },
    multiply(object, value) {
      object.result *= value;
    },
    divide(object, value) {
      object.result /= value;
    },
  };
}

module.exports = makeCalculator;
