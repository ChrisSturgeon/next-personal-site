---
title: 'Type and Equality in JavaScript'
date: '2023-04-17'
summary: 'An overview of the main differences between the equality operators in the JavaScript programming language.'
---

How do you determine equality in JavaScript? It depends upon which of the three equality comparison operators you ask! These are:

1. The `===` and `!==` operators known as _strict_ equality.
2. The `==` `!=` operators known as _loose_ equality.
3. The `Object.is()` method.

This post aims to give a brief explanation of the main difference between the first two (the last is a special-case of the first).

## Data Type

The big difference between the two boils down to type comparison. As you may already know all variables in JavaScript must be one of 8 different data-types. These are:

1. Null
2. Undefined
3. Boolean
4. Number
5. BigInt
6. String
7. Symbol
8. Object

The _strict_ `===` operator's first step when comparing two variables is to check if they're both of the same type. If they're not, it will immediately evaluate to `false`.

On the other hand, the _loose_ `==` operator also checks for type equality first but, in some instances, even if they're not originally the same type it will convert the type of one to match the other and then continue with it's comparison. The rules it follows for type conversion the can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#description).

This can produce some slightly quirky results. Let's look at some examples of each:

### Strict Operator

```javascript
1 === 1;
// evaluates to true as both are of number type and have the same value

'1' === 1;

// evaluates to false as one is of string type and the other of number type
```

### Loose Operator

```javascript
1 == 1;
// evaluates to true as both are of number type and the same value

'1' == 1;
// also evaluates to true as the '1' string is converted to a number type
// and then a comparison is made

'' == 0;
// evaluates to true as the string is first converted to
// number type with a value of 0
```

The last one is pretty bizzare right? Using _loose_ equality is a dangerous game because the rules it follows can produce some unexpected results, meaning you're more likely to introduce bugs in to your code. Unless you have a very good reason not to, it's best to make that extra keypress and use _strict_ `===` equality.

## Summary

The main difference between _loose_ and _strict_ comparisons is the latter will only continue comparing two values it they're both of the same type, whereas the former may first attempt some type-conversion which can result in weird and unexpected results - increasing the likelihood of bugs.

When in doubt, it's always best to always use the strict `===` operator by default unless you can have a clear reason not to.
