'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const newCalculator = calculator;

  newCalculator.reset();

  return newCalculator;
}

const calculator = {
  result: 0,

  operate(operation, input) {
    this.result = operation(input, this.result);

    return this;
  },

  subtract(input, current) {
    return current - input;
  },

  divide(input, current) {
    return current / input;
  },

  multiply(input, current) {
    return current * input;
  },

  add(input, current) {
    return current + input;
  },

  reset() {
    this.result = 0;

    return this;
  },

};

module.exports = makeCalculator;
