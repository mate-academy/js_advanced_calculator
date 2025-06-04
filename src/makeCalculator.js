'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  /*
  creating a function called "makeCalculator()", which contains a single object
  called "calculator{}", which contains a variable and functions, which are used
  to define a calculator. the most important function in the object is the
  "operate()" function, which takes two arguments; a function and a value. when
  we write something like calculator.operate(calculator.add, 10), what this does
  is we invoke the "operate()" function, with "calculator.add" and 10 as the
  function and value, which are referred to as "callback" and "value",
  respectively. inside this function, we use "callback.call(this, value)" as
  we explicitly refer to the calculator object in which we originally invoked
  the function call on. if we did not use ".call(this, value)", all of the
  function calls would not be bound to the current calculator object, so the
  "this" inside of them might refer to something else. this is how the inside of
  the "operate()" function would look internally when we write the following:

  calculator.operate(calculator.add, 10) --> operate() is invoked
  operate(calculator.add, 10) --> callback.call(this, value) is invoked
  callback.call(this, value) --> calculator.add.call(calculator, 10) is invoked

  all numeric operations are performed on the "result" variable, which can be
  internally accessed using "this" inside of the functions. all functions are
  accessible through using "operate()", as we can specify which mathematical
  operation to use as the first argument, which is passed as a callback to the
  "operate()" function, and the value to use with the specified function as the
  second argument
  */
  const calculator = {
    result: 0,

    operate(callback, value) {
      if (typeof callback === 'function') {
        callback.call(this, value);
      }

      return this;
    },

    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
