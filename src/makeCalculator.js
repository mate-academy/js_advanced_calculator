'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // creation of our hero
  const internalCalculator = {
    result: 0,

    operate: function(operation, number) {
      operation(number);

      return internalCalculator;
    },

    reset: function() {
      internalCalculator.result = 0;

      return internalCalculator;
    },

    add: function(addition) {
      internalCalculator.result += addition;
    },

    subtract: function(substractor) {
      internalCalculator.result -= substractor;
    },

    multiply: function(multiplier) {
      internalCalculator.result *= multiplier;
    },

    divide: function(divider) {
      internalCalculator.result /= divider;
    },
  };

  // when all done
  return internalCalculator;
}

module.exports = makeCalculator;
