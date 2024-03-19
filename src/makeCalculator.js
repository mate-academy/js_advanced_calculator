'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: function(operand1, operand2) {
      return operand1 + operand2;
    },
    subtract: function(operand1, operand2) {
      return operand1 - operand2;
    },
    multiply: function(operand1, operand2) {
      return operand1 * operand2;
    },
    divide: function(operand1, operand2) {
      return operand1 / operand2;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(callback, operand2) {
      this.result = callback(this.result, operand2);

      return this;
    },
  };
}

module.exports = makeCalculator;
