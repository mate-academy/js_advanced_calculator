"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function(operation, number) {
      operation.bind(this)(number);

      return this;
    },
    reset: function() {
      this.result = 0;

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
      this.result = this.result / number;

      return this;
    },
  };
}

module.exports = makeCalculator;
