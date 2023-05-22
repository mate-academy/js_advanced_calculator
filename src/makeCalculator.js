'use strict';

function makeCalculator() {
  let result = 0;

  return {
    add: function(num) {
      result += num;
    },
    subtract: function(num) {
      result -= num;
    },
    multiply: function(num) {
      result *= num;
    },
    divide: function(num) {
      result /= num;
    },
    reset: function() {
      result = 0;

      return this;
    },
    operate: function(callback, num) {
      callback.call(this, num);

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
