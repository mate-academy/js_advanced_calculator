'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator1 = {
    result: 0,
    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num; ;
    },
    multiply(num) {
      this.result *= num; ;
    },
    divide(num) {
      if (num !== 0) {
        this.result /= num;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operand, number) {
      operand.call(this, number);

      return this;
    },

  };

  return calculator1;
}

module.exports = makeCalculator;
