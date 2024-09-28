'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const abilities = {
    result: 0,
    add: (number) => (abilities.result += number),
    subtract: (number) => (abilities.result -= number),
    multiply: (number) => (abilities.result *= number),
    divide: (number) => {
      if (number === 0) {
        throw new Error('Divion by 0');
      }
      abilities.result /= number;

      return abilities.number;
    },

    operate,
    reset,
  };

  function operate(callback, number) {
    callback(number);

    return abilities;
  }

  function reset() {
    abilities.result = 0;

    return abilities;
  }

  return abilities;
}

module.exports = makeCalculator;
