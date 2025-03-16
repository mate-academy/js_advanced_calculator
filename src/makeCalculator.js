'use strict';

function makeCalculator() {
  return {
    result: 0,

    add: (x) => (y) => y + x,
    subtract: (x) => (y) => y - x,
    multiply: (x) => (y) => y * x,
    divide: (x) => (y) => y / x,

    operate(callback, number) {
      this.result = callback(number)(this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
