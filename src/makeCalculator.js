'use strict';

function makeCalculator() {
  return {
    result: 0,
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(operate, number) {
      this.result = operate(this.result, number);

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
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Don't divide by zero");
      }
    },

  };
}

module.exports = makeCalculator;
