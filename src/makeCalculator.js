'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    divide(value) {
      if (value !== 0) {
        this.result /= value;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(cb, val) {
      cb.call(this, val);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
