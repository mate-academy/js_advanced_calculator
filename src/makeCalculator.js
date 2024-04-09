'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate() {
      return this;
    }
  }
}

module.exports = makeCalculator;
