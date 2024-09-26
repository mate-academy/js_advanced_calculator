'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const res = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(number, this.result);

      return this;
    },
    add(number, operator) {
      return operator + number;
    },
    subtract(number, operator) {
      return operator - number;
    },
    divide(number, operator) {
      if (number === 0) {
        return Error(`You can't divide on 0`);
      }

      return operator / number;
    },
    multiply(number, operator) {
      return operator * number;
    },
  };

  return res;
}

module.exports = makeCalculator;
