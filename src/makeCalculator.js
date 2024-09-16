'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operator, operand) {
      this.result = operator(operand, this.result);

      return this;
    },

    add(value, score) {
      return score + value;
    },

    subtract(value, score) {
      return score - value;
    },

    multiply(value, score) {
      return score * value;
    },

    divide(value, score) {
      return score / value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
