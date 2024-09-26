'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add: function(a) {
      this.result += a;

      return this;
    },
    subtract: function(a) {
      this.result -= a;

      return this;
    },
    multiply: function(a) {
      this.result *= a;

      return this;
    },
    divide: function(a) {
      if (a === 0) {
        this.result = 0;

        return this;
      }
      this.result /= a;

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(callBack, x) {
      return callBack.call(this, x);
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
