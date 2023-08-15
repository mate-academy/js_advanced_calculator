'use strict';

function makeCalculator() {
  return {
    result: 0,
    operate: function(operation, number) {
      operation.call(this, number);

      return this;
    },
    add: function(number) {
      this.result += number;

      return this;
    },
    subtract: function(number) {
      this.result -= number;

      return this;
    },
    multiply: function(number) {
      this.result *= number;

      return this;
    },
    divide: function(number) {
      this.result /= number;

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
