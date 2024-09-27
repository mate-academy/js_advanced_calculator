'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate: function(operator, value) {
      this.result = operator(this.result, value);

      return this;
    },

    add: function(value1, value2) {
      return value1 + value2;
    },

    subtract: function(value1, value2) {
      return value1 - value2;
    },

    multiply: function(value1, value2) {
      return value1 * value2;
    },

    divide: function(value1, value2) {
      return value1 / value2;
    },

    reset: function() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
