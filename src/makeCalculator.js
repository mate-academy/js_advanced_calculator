'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add: function(number) {
      return this.result + number;
    },
    subtract: function(number) {
      return this.result - number;
    },
    multiply: function(number) {
      return this.result * number;
    },
    divide: function(number) {
      return this.result / number;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(callback, number) {
      this.result = callback.call(this, number);

      return this;
    },
    result: 0,
  };
}

module.exports = makeCalculator;
