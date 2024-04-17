'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      const isCalculatorMethod = Object.keys(this).some((method) => this[method] === callback);

      if (isCalculatorMethod && typeof callback === 'function') {
        callback.call(this, number);

        return this;
      }
    },
  };

  return calculate;
}

module.exports = makeCalculator;
