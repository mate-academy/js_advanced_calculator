'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const res = {

    result: 0,

    add: function(obj, x) {
      obj.result += x;
    },

    subtract: function(obj, x) {
      obj.result -= x;
    },

    multiply: function(obj, x) {
      obj.result *= x;
    },

    divide: function(obj, x) {
      obj.result /= x;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, x) {
      callback(this, x);

      return this;
    },
  };

  return res;
}

module.exports = makeCalculator;
