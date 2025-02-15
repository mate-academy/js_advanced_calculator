'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    add: function (x) {
      result += x;
    },
    subtract: function (x) {
      result -= x;
    },
    multiply: function (x) {
      result *= x;
    },
    divide: function (x) {
      if (x === 0) {
        throw new Error('Cannot divide by zero!');
      }
      result /= x;
    },
    reset: function () {
      result = 0;

      return this;
    },
    operate: function (callback, number) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be function!');
      }

      if (typeof number !== 'number' || !Number.isFinite(number)) {
        throw new Error('Number must be finite number!');
      }
      callback(number);

      return this;
    },
  };

  Object.defineProperty(calculator, 'result', {
    get: function () {
      return result;
    },
  });

  return calculator;
}

module.exports = makeCalculator;
