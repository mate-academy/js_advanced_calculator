'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function(operation, param) {
      operation.call(this, param);

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    add: function(x) {
      this.result += x;
    },
    subtract: function(x) {
      this.result -= x;
    },
    multiply: function(x) {
      this.result *= x;
    },
    divide: function(x) {
      this.result /= x;
    },
  };
}

module.exports = makeCalculator;
