// 'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      this.result = callback(this, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add: (CalcObject, number) => CalcObject.result + number,
    subtract: (CalcObject, number) => CalcObject.result - number,
    multiply: (CalcObject, number) => CalcObject.result * number,
    divide: (CalcObject, number) => CalcObject.result / number,
  };
}

module.exports = makeCalculator;
