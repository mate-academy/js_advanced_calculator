'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      this.result /= num;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operates, numbers) {
      operates.call(this, numbers);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
