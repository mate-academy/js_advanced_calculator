'use strict';

/**
 * @return {object}
 */
'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(num) {
      this.result += num;

      return this;
    },

    subtract(num) {
      this.result -= num;

      return this;
    },

    multiply(num) {
      this.result *= num;

      return this;
    },

    divide(num) {
      if (num === 0) {
        return this;
      }
      this.result /= num;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
