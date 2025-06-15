'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (x) {
      calculator.result = calculator.result + x;
    },

    subtract: function (x) {
      calculator.result = calculator.result - x;
    },

    multiply: function (x) {
      calculator.result = calculator.result * x;
    },

    divide: function (x) {
      if (x !== 0) {
        calculator.result = calculator.result / x;
      }
    },

    operate: function (callback, x) {
      callback(x); // викликаємо функцію з переданим числом

      return calculator; // щоб можна було робити ланцюжок викликів
    },

    reset: function () {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
