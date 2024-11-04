'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    operate: function (f, num) {
      this.result = f(this.result, num);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
