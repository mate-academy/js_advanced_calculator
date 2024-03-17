"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(method, number) {
      method.call(this, number);

      return this;
    },
    add(number) {
      this.result = this.result + number;

      return this;
    },
    subtract(number) {
      this.result = this.result - number;

      return this;
    },
    multiply(number) {
      this.result = this.result * number;

      return this;
    },
    divide(number) {
      this.result = this.result / number;

      return this;
    },
    reset() {
      this.result = this.result * 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
