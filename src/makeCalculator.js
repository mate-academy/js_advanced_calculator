'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const answer = {
    result: 0,
    operate: function(callback, number) {
      callback(number);

      return answer;
    },
    reset: function() {
      answer.result = 0;

      return answer;
    },
    add: function(number) {
      answer.result += number;
    },
    subtract: function(number) {
      answer.result -= number;
    },
    multiply: function(number) {
      answer.result *= number;
    },
    divide: function(number) {
      answer.result /= number;
    },
  };

  return answer;
}

module.exports = makeCalculator;
