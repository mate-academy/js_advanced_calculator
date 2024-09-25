'use strict';

/**
 * @return {object}
 * - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
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
      if (value) {
        this.result /= value;
      }

      return 'Enter correct value';
    },
    operate(callback, param) {
      callback.call(this, param);

      return this;
    },
  };
}

module.exports = makeCalculator;
