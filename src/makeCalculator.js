'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function(num) {
      this.result += num;

      return calculator;
    },
    subtract: function(num) {
      this.result -= num;

      return calculator;
    },
    multiply: function(num) {
      this.result *= num;

      return calculator;
    },
    divide: function(num) {
      this.result /= num;

      return calculator;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(callback, num) {
      if (typeof callback === 'function') {
        callback.call(this, num);
      }

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
