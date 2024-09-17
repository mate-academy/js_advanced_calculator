'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(initial, toOperate) {
      return initial + toOperate;
    },

    subtract(initial, toOperate) {
      return initial - toOperate;
    },

    multiply(initial, toOperate) {
      return initial * toOperate;
    },

    divide(initial, toOperate) {
      return initial / toOperate;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
