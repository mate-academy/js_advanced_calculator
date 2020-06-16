'use strict';

function makeCalculator() {
  const calculatorObject = {
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    devide(value) {
      this.result /= value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
    result: 0,
  };

  return calculatorObject;
}

module.exports = makeCalculator;
