---
title: 'Equality in JavaScript'
date: '2023-04-17'
summary: 'An overview of the main differences between the equality operators in the JavaScript programming language.'
---

How do you determine equality in JavaScript? It depends upon which of the three equality comparison operators you ask! These are:

1. The `===` and `!==` operators known as _strict_ equality and inequality.
2. The `==` `!=` operators known as _loose_ equality and inequality.
3. The `Object.is()` method.

This post aims to give a brief explanation of the main difference between the first two (the last is a special-case of the first).

## Data Type

As you may already know all variables in JavaScript must be one of 8 different data-types. These are:

1. Null
2. Undefined
3. Boolean
4. Number
5. BigInt
6. String
7. Symbol
8. Object

The biggest difference between the two operators is that the _strict_ (`===`)
operator's first step in comparing two variables is to check if they're both of the the same type and, if not, return `false`. However, the _loose_ (`==`) operator isn't so picky about the type. It will attempt to convert some types and then make a comparison. This can lead to some quirkiness such as:

### Strict Operator

```javascript
1 === 1;
// evaluates to true as both are of number type and have the same value

'1' === 1;

// evaluates to false as one is a string and the other of number type
```

### Loose Operator

```javascript
1 == 1;
// evaluates to true as both are of number type and the same value

'1' == 1;
// also evaluates to true as the '1' string is first converted to a number type
// and then a comparison is made
```

## Summary

When in doubt, it's always best to always use the strict `===` operator by default unless you can have a clear reason not to.
