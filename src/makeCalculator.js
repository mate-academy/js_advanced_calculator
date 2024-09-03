'use strict';

function makeCalculator() {
  const resultingObject = {
    result: 0,
    add(a) {
      resultingObject.result += a;

      return resultingObject.result;
    },
    subtract(a) {
      resultingObject.result -= a;

      return resultingObject.result;
    },
    multiply(a) {
      resultingObject.result *= a;

      return resultingObject.result;
    },
    divide(a) {
      resultingObject.result /= a;

      return resultingObject.result;
    },
    reset() {
      resultingObject.result = 0;

      return this;
    },
    operate(callback, x) {
      resultingObject.result = callback(x);

      return this;
    },
  };

  return resultingObject;
}

module.exports = makeCalculator;
