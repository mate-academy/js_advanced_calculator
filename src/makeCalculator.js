'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function(operation, value) {
      return operation.call(this, value);
    },
    add: function(x) {
      this.result += x;

      return this;
    },
    subtract: function(x) {
      this.result -= x;

      return this;
    },
    multiply: function(x) {
      this.result *= x;

      return this;
    },
    divide: function(x) {
      if (x !== 0) {
        this.result /= x;
      }

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
