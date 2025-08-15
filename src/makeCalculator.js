'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const obj = {
    result: 0,

    add(number) {
      return this.result + number;
    },

    subtract(number) {
      return this.result - number;
    },

    multiply(number) {
      return this.result * number;
    },

    divide(number) {
      if (number === 0) {
        return this.result;
      }

      return this.result / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
      }

      this.result = callback.call(this, number);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
