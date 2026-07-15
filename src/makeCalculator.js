'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  return {
    result: 0,
    operate(callBack, interactionEl) {
      return callBack.call(this, interactionEl);
    },
    add(toAdd) {
      this.result += toAdd;

      return this;
    },
    subtract(toSubtract) {
      this.result -= toSubtract;

      return this;
    },
    multiply(toMultip) {
      this.result *= toMultip;

      return this;
    },
    divide(toDivide) {
      this.result /= toDivide;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
