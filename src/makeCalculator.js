'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
      result: 0,
      add: function(num) {
          this.result += num;
          return this;
      },
      subtract: function(num) {
          this.result -= num;
          return this;
      },
      multiply: function(num) {
          this.result *= num;
          return this;
      },
      divide: function(num) {
          if (num !== 0) {
              this.result /= num;
          } else {
              this.result = 0; 
          }
          return this;
      },
      reset: function() {
          this.result = 0;
          return this;
      },
      operate: function(callback, number) {
          callback(number);
          return this;
      }
  };
}

module.exports = makeCalculator;
