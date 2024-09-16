'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    'result': 0,

    'add': function(value) {
      this.result += value;
    },

    'subtract': function(value) {
      this.result -= value;
    },

    'multiply': function(value) {
      this.result *= value;
    },

    'divide': function(value) {
      this.result = value === 0 ? Infinity : this.result / value;
    },

    'reset': function() {
      this.result = 0;

      return this;
    },

    'operate': function(operation, operand) {
      operation.call(this, operand);

      return this;
    },
  };
}

module.exports = makeCalculator;
