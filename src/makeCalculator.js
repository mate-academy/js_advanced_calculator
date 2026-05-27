'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // Ваш код здесь
  return {
    result: 0,

    add(current, num) {
      return current + num;
    },
    subtract(current, num) {
      return current - num;
    },
    multiply(current, num) {
      return current * num;
    },
    divide(current, num) {
      return current / num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
