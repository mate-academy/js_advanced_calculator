'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,
    add: function(num, res) {
      return res + num;
    },
    subtract: function(num, res) {
      return res - num;
    },
    multiply: function(num, res) {
      return res * num;
    },
    divide: function(num, res) {
      return res / num;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },
  };
}

module.exports = makeCalculator;
