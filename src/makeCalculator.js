'use strict';

function makeCalculator() {
  const resultObj = {
    result: 0,

    add(number) {
      resultObj.result += number;
    },

    subtract(number) {
      resultObj.result -= number;
    },

    multiply(number) {
      resultObj.result *= number;
    },

    divide(number) {
      resultObj.result /= number;
    },

    operate(callback, number) {
      callback(number);

      return this;
    },

    reset() {
      resultObj.result = 0;

      return this;
    },
  };

  return resultObj;
}

module.exports = makeCalculator;
