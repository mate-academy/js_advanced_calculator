'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      return a / b;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
