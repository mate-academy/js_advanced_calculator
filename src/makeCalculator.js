'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {

    result: 0,

    add: function(a, b) {
      return a + b;
    },

    divide: function(a, b) {
      return a / b;
    },

    subtract: function(a, b) {
      return a - b;
    },

    multiply: function(a, b) {
      return a * b;
    },

    operate: function(operation, operand) {
      this.result = operation(this.result, operand);

      return this;
    },

    reset: function() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
