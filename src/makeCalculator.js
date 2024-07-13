'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      return callback.call(this, value);
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
}

/*
  ---= Variant 2 =--

function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      return callback(this, value);
    },
    add(obj, value) {
      obj.result += value;

      return obj;
    },
    subtract(obj, value) {
      obj.result -= value;

      return obj;
    },
    multiply(obj, value) {
      obj.result *= value;

      return obj;
    },
    divide(obj, value) {
      obj.result /= value;

      return obj;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}
*/

/*
  ---= Variant 3 =---

function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      this.result = callback(this, value);

      return this;
    },
    add(obj, value) {
      return obj.result + value;
    },
    subtract(obj, value) {
      return obj.result - value;
    },
    multiply(obj, value) {
      return obj.result * value;
    },
    divide(obj, value) {
      return obj.result / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}
*/

/*
  ---= Variant 4 =---

function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },
    add(value) {
      return this.result + value;
    },
    subtract(value) {
      return this.result - value;
    },
    multiply(value) {
      return this.result * value;
    },
    divide(value) {
      return this.result / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}
*/

/*
  ---= Variant 5 =---

function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
    add(result, value) {
      return result + value;
    },
    subtract(result, value) {
      return result - value;
    },
    multiply(result, value) {
      return result * value;
    },
    divide(result, value) {
      return result / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}
*/

module.exports = makeCalculator;
