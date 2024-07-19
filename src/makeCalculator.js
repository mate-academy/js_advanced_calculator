'use strict';

/**
 * @return {object}
 */

// `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`

function makeCalculator() {
  const calculator = {
    result: 0,
    add(obj, val) {
      obj.result += val;
    },
    subtract(obj, val) {
      obj.result -= val;
    },
    multiply(obj, val) {
      obj.result *= val;
    },
    divide(obj, val) {
      obj.result /= val;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, val) {
      operation(this, val);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
