'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
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
      this.result /= num;

      return this;
    },
    operate: function(operation, num) {
      return operation.call(this, num)
    },
    reset: function() {
      this.result = 0;

      return this;
    },
  };
};

module.exports = makeCalculator;
