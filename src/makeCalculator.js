'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callbackOperation, number) {
      callbackOperation(number, this);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(num, obj) {
      obj.result += num;
    },

    subtract(num, obj) {
      obj.result -= num;
    },

    multiply(num, obj) {
      obj.result *= num;
    },

    divide(num, obg) {
      obg.result /= num;
    },
  };
}

module.exports = makeCalculator;
