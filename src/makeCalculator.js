'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {
    result: 0,
    add: (x, y) => y + x,
    subtract: (x, y) => x - y,
    multiply: (x, y) => y * x,
    divide: (x, y) => x / y,
    operate(callBack, number) {
      this.result = callBack(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return object;
}

module.exports = makeCalculator;
