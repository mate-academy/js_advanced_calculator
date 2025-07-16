'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const returnObj = {
    result: 0,

    operate(callback, x) {
      returnObj.result = callback(x);

      return returnObj;
    },

    add(x) {
      return returnObj.result + x;
    },

    subtract(x) {
      return returnObj.result - x;
    },

    multiply(x) {
      return returnObj.result * x;
    },

    divide(x) {
      return returnObj.result / x;
    },

    reset() {
      returnObj.result = 0;

      return returnObj;
    },
  };

  return returnObj;
}

module.exports = makeCalculator;
