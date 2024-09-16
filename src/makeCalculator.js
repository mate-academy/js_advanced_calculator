'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    add(number) {
      this.result += number;

      return this;
    },

    subtract(number) {
      this.result -= number;

      return this;
    },

    multiply(number) {
      this.result *= number;

      return this;
    },

    divide(number) {
      this.result /= number;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return object;
};

module.exports = makeCalculator;
