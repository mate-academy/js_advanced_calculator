'use strict';

function makeCalculator() {
  // write code here
  const calc = {
    result: 0,
    add(a) {
      this.result += a;
    },
    subtract(a) {
      this.result -= a;
    },
    multiply(a) {
      this.result *= a;
    },
    divide(a) {
      this.result /= a;
    },
    operate(callback, num) {
      callback.call(calc, num);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
