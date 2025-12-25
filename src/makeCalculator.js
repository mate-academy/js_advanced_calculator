'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (a, b) {
      return a + b;
    },

    subtract: function (a, b) {
      return a - b;
    },

    multiply: function (a, b) {
      return a * b;
    },

    divide: function (a, b) {
      return a / b;
    },

    operate: function (callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

const calculator = makeCalculator();

calculator
  .operate(calculator.add)
  .reset()
  .operate(calculator.subtract)
  .operate(calculator.divide)
  .operate(calculator.multiply);
