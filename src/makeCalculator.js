'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    divide: (x, y) => x / y,
    multiply: (x, y) => x * y,

    operate: function(callback, x) {
      this.result = callback(this.result, x);

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
