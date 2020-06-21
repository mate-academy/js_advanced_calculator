'use strict';

function makeCalculator() {
  const calculatorObj = {
    result: 0,
    add(value) {
      calculatorObj.result += value;

      return calculatorObj.result;
    },
    subtract(value) {
      calculatorObj.result -= value;

      return calculatorObj.result;
    },
    multiply(value) {
      calculatorObj.result *= value;

      return calculatorObj.result;
    },
    divide(value) {
      calculatorObj.result /= value;

      return calculatorObj.result;
    },
    reset() {
      calculatorObj.result = 0;

      return calculatorObj;
    },
    operate(callback, number) {
      calculatorObj.result = callback(number);

      return calculatorObj;
    },
  };

  return calculatorObj;
}

module.exports = makeCalculator;
