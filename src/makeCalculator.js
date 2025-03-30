'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  // write code here

  return {
    result: 0,
    add: function(result, num) {
      return result + num;
    },
    subtract: function(result, num) {
      return result - num;
    },
    multiply: function(result, num) {
      return result * num;
    },
    divide: function(result, num) {
      return result / num;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(operation, num) {
      this.result = operation(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
