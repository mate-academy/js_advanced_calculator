'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate: function (callback, a) {
      if (typeof callback !== 'function') {
        throw new Error();
      }

      const param = a;

      callback.call(calculator, param);

      return calculator;
    },

    add: function (param) {
      const newResult = calculator.result + param;

      calculator.result = newResult;
    },

    subtract: function (param) {
      const sub = calculator.result - param;

      calculator.result = sub;
    },

    multiply: function (parm) {
      const multi = calculator.result * parm;

      calculator.result = multi;
    },

    divide: function (parm) {
      const div = calculator.result / parm;

      calculator.result = div;
    },

    reset: function () {
      const zero = 0;

      this.result = zero;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
