# Make Calculator

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

Another calculator. Now the task is more difficult.

## Task description

Create a `makeCalculator` function that returns an object that
has the following fields:

- Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
- The `result` property is initially 0.

How the calculator will work:

- Each `operate` call takes a callback and a number and sets the appropriate value to the `result` property.
- The `reset` method resets `result` value to 0.
- `add`, `subtract`, `multiply`, `divide` are passed as callbacks to `operate` method.
- The `operate` and `reset` methods can be called in a chain.

Example:

```js
const calculator = makeCalculator();

calculator.operate(calculator.add, 21)

console.log(calculator.result); // 21

calculator.reset()
console.log(calculator.result); // 0

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7)

console.log(calculator.result); // -28
```
