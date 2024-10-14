'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(val) {
      this.result += val;
    },
    subtract(val) {
      this.result -= val;
    },
    multiply(val) {
      this.result *= val;
    },
    divide(val) {
      if (val !== 0) {
        this.result /= val;
      } else {
        throw new Error('cant divide by 0');
      }
    },
    operate(operation, value) {
      if (typeof operation === 'function') {
        operation.call(this, value);

        return this;
      } else {
        throw new Error(`${operation} is not a function`);
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
