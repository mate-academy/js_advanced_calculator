'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function (sv, x) {
      this.result = sv(this.result, x);

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    multiply: (result, x) => result * x,
    divide: (result, x) => (x === 0 ? result : result / x),
    add: (result, x) => result + x,
    subtract: (result, x) => result - x,
  };
}

module.exports = makeCalculator;
