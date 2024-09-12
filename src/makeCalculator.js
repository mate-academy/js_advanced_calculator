'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: (res, numb) => res + numb,
    subtract: (res, numb) => res - numb,
    multiply: (res, numb) => res * numb,
    divide: (res, numb) => res / numb,
    operate(cb, num) {
      this.result = cb(this.result, num);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
