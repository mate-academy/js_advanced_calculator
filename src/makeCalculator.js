'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
  };

  obj.add = (n) => (obj.result += n);
  obj.subtract = (n) => (obj.result -= n);
  obj.multiply = (n) => (obj.result *= n);
  obj.divide = (n) => (obj.result /= n);

  obj.reset = (n) => {
    obj.result = 0;

    return obj;
  };

  obj.operate = (callback, number) => {
    callback(number);

    return obj;
  };

  return obj;
}

module.exports = makeCalculator;
