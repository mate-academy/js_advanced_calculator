'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, value) {
      callback(this, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(obj, value) {
      obj.result += value;
    },
    subtract(obj, value) {
      obj.result -= value;
    },
    divide(obj, value) {
      obj.result /= value;
    },
    multiply(obj, value) {
      obj.result *= value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
