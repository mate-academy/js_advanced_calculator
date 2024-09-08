'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calc = {
    result: 0,

    add(objResult, num) {
      return objResult + num;
    },

    subtract(objResult, num) {
      return objResult - num;
    },

    multiply(objResult, num) {
      return objResult * num;
    },

    divide(objResult, num) {
      return objResult / num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(func, num) {
      this.result = func(this.result, num);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
