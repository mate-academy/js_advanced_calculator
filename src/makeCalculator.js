'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {
    result: 0,

    operate(func, number) {
      this.result = func(number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(value) {
      object.result += value;

      return object.result;
    },

    subtract(value) {
      object.result -= value;

      return object.result;
    },

    multiply(value) {
      object.result *= value;

      return object.result;
    },

    divide(value) {
      object.result /= value;

      return object.result;
    },
  };

  return object;
}

module.exports = makeCalculator;
