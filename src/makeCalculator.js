'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let resultValue = 0;

  return {
    add(param) {
      resultValue += param;

      return this;
    },

    subtract(param) {
      resultValue -= param;

      return this;
    },

    divide(param) {
      resultValue /= param;

      return this;
    },

    multiply(param) {
      resultValue *= param;

      return this;
    },

    reset() {
      resultValue = 0;

      return this;
    },

    operate(callback, param) {
      callback(param);

      return this;
    },

    get result() {
      return resultValue;
    },
  };
}

module.exports = makeCalculator;
