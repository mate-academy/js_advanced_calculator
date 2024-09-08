'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(value){
      result += value;
      return this;
    },

    subtract(value){
      result -= value;
      return this;
    },

    multiply(value){
      result *= value;
      return this;
    },

    divide(value){
      if(value !== 0){
        result /= value;
        return this;
      } else {
        console.log('Error: Division by zero');
      }
    },

    reset(){
      result = 0;
      return this;
    },

    operate(operation, value){
      operation.call(this, value);
      return this;
    },

    get result(){
      return result;
    }
  };
}

module.exports = makeCalculator;
