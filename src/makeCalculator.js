'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    calc: 0,

    get result() {
      return this.calc;
    },
    // get result is created since checklist says not to use result var

    operate(callback, num) {
      callback(num);

      return this;
    },

    // I have no idea why 'this' keyword doesn't work in add, subtract etc.
    add(value) {
      calculator.calc += value;
    },

    subtract(value) {
      calculator.calc -= value;
    },

    multiply(value) {
      calculator.calc *= value;
    },

    divide(value) {
      calculator.calc /= value;
    },

    reset() {
      calculator.calc = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
