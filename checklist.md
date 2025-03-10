#

1. [NAMING] - Use proper names for variables. If function was called `makeFruit`, it should return `fruit`
2. [CODE STYLE] - use arithmetic operators with assignment operator `=` if you want to add something to existing value

BAD EXAMPLE:

```js
let a = 1;

a = a + 2;
```

GOOD EXAMPLE:

```js
let a = 1;

a += 2;
```

3. [CODE KNOWLEDGE] - if you creating a method in the object, you don't need to use function keyword, use shortcut instead.

BAD EXAMPLE:

```js
 methodName: function() {
 // your code
},
```

GOOD EXAMPLE:

  ```js
  methodName() {
  // your code
  },
  ```
