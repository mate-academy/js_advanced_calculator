'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const total = {
    result: 0,
    operate: function(callback, num) {
      return callback(num);
    },

    add: num => {
      total.result += num;
      return total;
    },
    subtract: num => {
      total.result -= num;
      return total;
    },
    multiply: num => {
      total.result *= num;
      return total;
    },
    divide: num => {
      total.result /= num;
      return total;
    },
    reset: () => {
      total.result = 0;
      return total;
    },
  };

  return total;
}


module.exports = makeCalculator;
