'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(operand = 0, thiz) {
      thiz.result += operand;
    },

    subtract(operand = 0, thiz) {
      thiz.result -= operand;
    },

    multiply(operand = 1, thiz) {
      thiz.result *= operand;
    },

    divide(operand = 1, thiz) {
      thiz.result /= operand;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(localFunc, operand) {
      localFunc(operand, this);

      return this;
    },
  };
}

module.exports = makeCalculator;
