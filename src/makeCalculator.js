'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate: function(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    },
    multiply: function(x, y) {
      return x * y;
    },
    divide: function(x, y) {
      return x / y;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

makeCalculator();

module.exports = makeCalculator;
