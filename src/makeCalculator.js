'use strict';

function makeCalculator() {
  let calc = 0;

  const innerCalculator = {
    calc: 0,

    add: function(num) {
      calc += num;

      return this;
    },

    subtract: function(num) {
      calc -= num;

      return this;
    },

    multiply: function(num) {
      calc *= num;

      return this;
    },
    divide: function(num) {
      calc /= num;

      return this;
    },

    operate: function(callback, num) {
      callback(num);

      return this;
    },

    reset: function() {
      calc = 0;

      return this;
    },

    get result() {
      return calc;
    },
  };

  return innerCalculator;
}

module.exports = makeCalculator;
