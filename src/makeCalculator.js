'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const systemObj = {
    result: 0,
    add: (value, current) => current + value,
    subtract: (value, current) => current - value,
    multiply: (value, current) => value * current,
    divide: (value, current) => (value === 0 ? current : current / value),
    operate(callback, inputNum) {
      this.result = callback(inputNum, this.result);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return systemObj;
}

module.exports = makeCalculator;
