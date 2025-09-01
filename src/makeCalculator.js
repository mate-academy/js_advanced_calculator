'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
    add: (curr, num) => curr + num,
    divide: (curr, num) => curr / num,
    subtract: (curr, num) => curr - num,
    multiply: (curr, num) => curr * num,
    operate(task, numb) {
      this.result = task(this.result, numb);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
