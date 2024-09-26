'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(a) {
      return this.result + a;
    },

    subtract(a) {
      return this.result - a;
    },

    multiply(a) {
      return this.result * a;
    },

    divide(a) {
      return this.result / a;
    },

    operate(method, number) {
      this.result = method.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
