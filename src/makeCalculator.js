'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const box = {
    result: 0,

    add(nam) {
      box.result += nam;

      return box;
    },

    subtract(nam) {
      box.result -= nam;

      return box;
    },

    multiply(nam) {
      box.result *= nam;

      return box;
    },

    divide(nam) {
      box.result /= nam;

      return box;
    },

    operate(callback, number) {
      callback(number);

      return box;
    },

    reset() {
      box.result = 0;

      return box;
    },
  };

  return box;
}

module.exports = makeCalculator;
