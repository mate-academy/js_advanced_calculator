'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    fin: 0,
    operate(callback, num) {
      return callback(num);
    },
    add(num) {
      return this.fin + num;
    },
    result() {
      return this.do();
    },
  };

  return calculator;
}

module.exports = makeCalculator;
