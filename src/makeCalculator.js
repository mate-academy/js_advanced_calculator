'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(thisCalculator, n) {
      thisCalculator.result += n;
    },
    subtract(thisCalculator, n) {
      thisCalculator.result -= n;
    },
    multiply(thisCalculator, n) {
      thisCalculator.result *= n;
    },
    divide(thisCalculator, n) {
      thisCalculator.result /= n;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, n) {
      operation(this, n);

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
