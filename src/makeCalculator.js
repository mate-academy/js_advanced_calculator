'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset: function() {
      this.result = 0;

      return this;
    },
    operate(op, number) {
      op(this, number);

      return this;
    },
    add(ref, number) {
      ref.result += number;
    },
    subtract(ref, number) {
      ref.result -= number;
    },
    divide(ref, number) {
      ref.result /= number;
    },
    multiply(ref, number) {
      ref.result *= number;
    },
  };
}

module.exports = makeCalculator;
