'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    num: 0,

    add(value) {
      this.num += value;
    },

    subtract(value) {
      this.num -= value;
    },

    divide(value) {
      this.num /= value;
    },

    multiply(value) {
      this.num *= value;
    },

    reset() {
      this.num = 0;

      return this;
    },

    get result() {
      return this.num;
    },

    operate(callback, value) {
      const func = callback.bind(this, value);

      func();

      return this;
    },
  };
}

module.exports = makeCalculator;
