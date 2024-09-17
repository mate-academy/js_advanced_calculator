'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: function(num) {
      this.result += num;

      return this;
    },
    subtract: function(num) {
      this.result -= num;

      return this;
    },
    multiply: function(num) {
      this.result *= num;

      return this;
    },
    divide: function(num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        return 'error';
      }

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(callback, num) {
      if (typeof callback === 'function') {
        callback.call(this, num);
      } else {
        return 'error';
      }

      return this;
    },
    getResult: function() {
      return this.result;
    },
  };

  return calculator;
}
module.exports = makeCalculator;
