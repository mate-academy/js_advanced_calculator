'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, y) {
      callback.call(this, y);

      return this;
    },

    add(ad) {
      this.result += ad;

      return this;
    },

    multiply(multipl) {
      this.result *= multipl;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    subtract(subtrac) {
      this.result -= subtrac;

      return this;
    },

    divide(divid) {
      this.result /= divid;

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
