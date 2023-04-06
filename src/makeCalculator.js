'use strict';

function makeCalculator() {
  // write code here
  const calc = {
    result: 0,
    add(a) {
      return calc.result += a;
    },
    subtract(a) {
      return calc.result -= a;
    },
    multiply(a) {
      return calc.result *= a;
    },
    divide(a) {
      return calc.result /= a;
    },
    operate(callback, num) {
      calc.result = callback(num);
      return this;
    },
    reset() {
      calc.result = 0;
      return this;
    }
  };

  return calc;
}

module.exports = makeCalculator;
