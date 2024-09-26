'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
  };

  obj.operate = (action, item) => {
    return action(item);
  };

  obj.add = (item) => {
    obj.result += item;

    return obj;
  };

  obj.subtract = (item) => {
    obj.result -= item;

    return obj;
  };

  obj.multiply = (item) => {
    obj.result *= item;

    return obj;
  };

  obj.divide = (item) => {
    obj.result /= item;

    return obj;
  };

  obj.reset = () => {
    obj.result = 0;

    return obj;
  };

  return obj;
}

module.exports = makeCalculator;
