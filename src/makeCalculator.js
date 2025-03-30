'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculObject = {
    result: 0,
    operate(callback, param) {
      callback(this, param);

      return this;
    },
    add(scope, number) {
      scope.result += number;
    },
    subtract(scope, number) {
      scope.result -= number;
    },
    divide(scope, number) {
      scope.result /= number;
    },
    multiply(scope, number) {
      scope.result *= number;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculObject;
}

module.exports = makeCalculator;
