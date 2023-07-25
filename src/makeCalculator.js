'use strict';

function makeCalculator() {
  return {
    result: 0,

    checkValue(val) {
      if (val && typeof (val) === 'number') {
        return this;
      } else {
        throw new Error('Invalid value!');
      }
    },

    add(val) {
      this.result += val;

      return this;
    },

    subtract(val) {
      this.result -= val;

      return this;
    },

    multiply(val) {
      this.result *= val;

      return this;
    },

    divide(val) {
      this.result /= val;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, val) {
      if (typeof callback === 'function' && this.checkValue(val)) {
        const bindCallback = callback.bind(this);

        return bindCallback(val);
      }

      throw new Error(`${callback} is not an operator in this calc`);
    },
  };
}

module.exports = makeCalculator;
