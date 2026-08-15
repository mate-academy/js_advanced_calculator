'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (num, x) => {
      let current = num;

      current += x;

      return current;
    },

    subtract: (num, x) => {
      let current = num;

      current -= x;

      return current;
    },

    multiply: (num, x) => {
      let current = num;

      current *= x;

      return current;
    },

    divide: (num, x) => {
      let current = num;

      current /= x;

      return current;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
