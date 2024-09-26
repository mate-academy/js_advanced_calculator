'use strict';

/**
 * @return {object}
 */
'use strict';

const makeCalculator = () => {
  let result = 0;

  const add = function(num) {
    result += num;

    return this;
  };

  const subtract = function(num) {
    result -= num;

    return this;
  };

  const multiply = function(num) {
    result *= num;

    return this;
  };

  const divide = function(num) {
    if (num !== 0) {
      result /= num;
    } else {
      throw new Error('Cannot divide by zero');
    }

    return this;
  };

  const reset = function() {
    result = 0;

    return this;
  };

  const operate = function(callback, num) {
    return callback.call(this, num);
  };

  return {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    get result() {
      return result;
    },
  };
};

module.exports = makeCalculator;
