'use strict';

/**
 * @return {object}
 */

// `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`

function makeCalculator() {
  const calculator = {
    result: 0,
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
      this.result /= val;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, val) {
      operation.call(this, val);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
