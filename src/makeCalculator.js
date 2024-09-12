'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      callback(this, num);

      return this;
    },
    add: (obj, num) => {
      obj.result += num;

      return obj;
    },

    subtract: (obj, num) => {
      obj.result -= num;

      return obj;
    },

    multiply: (obj, num) => {
      obj.result *= num;

      return obj;
    },

    divide: (obj, num) => {
      obj.result /= num;

      return obj;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
