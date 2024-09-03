'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    get add() {
      return '+';
    },
    get subtract() {
      return '-';
    },
    get multiply() {
      return '*';
    },
    get divide() {
      return '/';
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      switch (callback) {
        case '+':
          this.result += value;
          break;
        case '-':
          this.result -= value;
          break;
        case '*':
          this.result *= value;
          break;
        case '/':
          this.result /= value;
          break;
        default:
          return 'Unknown operation';
      }

      return this;
    },
    result: 0,
  };
}

module.exports = makeCalculator;
