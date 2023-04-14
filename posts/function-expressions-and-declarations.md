---
title: 'Function Expressions and Declarations'
date: '2022-12-04'
summary: 'A detailed look at the main differences between creating JavaScript functions with function declarations and function declarations'
---

In this post we're going to look at function **declarations** and function **expressions** in JavaScript, and when to use one instead the other.

When I first started learning JavaScript I kept on seeing functions written in many different ways across various tutorials, documentation, and books etc. I naively assumed they were all exactly the same apart from the syntax, and it was just down to personal preference on which to use. Hopefully by the end of this post you'll have some understanding of why I was wrong.

To help illustrate, let's imagine we're in the process of making a calculator app and want to create a function which takes in a number, squares it, and returns the result. We'll do this for both types individually first and then compare the differences in the two.

## Function Declarations

Let's first define this using a function declaration as it's arguably the simpler of the two. To create it we follow three steps:

1. Write the word `function` followed by the **name** of the function. We'll call it `squareNumber`.
2. Define the **input parameters** of the function in brackets. In our case we just have one which is the number we want to square. Let's call this `num`.
3. Write the function **statements** within the function **body** which is contained within curly braces. This is the code which will run when we invoke the function. We want to take `num`, multiply it by itself, and return the result.

Let's put this altogether and invoke our function declaration with an example:

```javascript
function squareNumber(num) {
  return num * num;
}

console.log(squareNumber(7));
// console logs '49' as a Number type
```

As you can see the structure of a function declaration is quite straight forward. We can write a generic template to refer to when we want to create a function declaration that does something else:

```javascript
function name(parameter0, parameter1...parameterN) {
  // statements here
}
```

It's worth noting here that functions return `undefined` by default so don't forget to include a `return` statement in the body.

## Function Expressions

We can also create a function by defining it within an expression. In JavaScript an expression is a unit of code which evaluates to a value. In the context of this discussion it simply means that we're creating a function and assigning it to a variable.

Things start to get a little spicy here because not only are there variations of function expressions, but some of these also have variations of their own! I'll be writing another post on all the different types shortly, but for now let's use an **anonymous function expression**, which is a common use-case, to continue our comparison between function declarations and function expressions.

The steps to creating an anonymous function expression are:

1. Create a variable which we'd like to assign the function to. In this case we'll use a `const` variable called `squareNumber`.
2. Write the `function` keyword without providing a name to the function. It's the omission of the name which makes the function anonymous. We've assigned the function to a variable in step 1 so we have a way of referring to it later, otherwise it would be created and then immediately forgotten.
3. Define the **input parameters** in the same way as before.
4. Write the **statements** in the function **body**, making sure to include a `return` statement.

Putting these together we arrive at:

```javascript
const squareNumber = function (num) {
  return num * num;
};
```

As before let's create a generic template version:

```javascript
const variableName = function(parameter0, parameter1...parameterN) {
  // statements here
};
```

You might be thinking this just looks like a more verbose version of our **function declaration** so let's delve into some of the differences.

## Differences and Use Cases

### Hoisting

When a JavaScript engine examines your code at run-time, it does a process called **hoisting**. In simple terms, this means that before your code starts to execute, the engine looks through all your code and pulls your declarations to the top of the code so they're available immediately as the code starts to run, rather than waiting for the engine to reach the part of your code where you've declared the function. What does the mean in practice? You can call a function declaration before it's written and it will still execute:

```javascript
console.log(squareNumber(6));
// console logs 36

function squareNumber(num) {
  return num * num;
}
```

This isn't the case for function expressions. Technically, the variable assigned to the function is still hoisted, but because a process call initialisation isn't completed, it won't be available before it's declared:

```javascript
console.log(squareNumber(5));
// Gives the error: "ReferenceError: Cannot access 'squareNumber' before initialization"

const squareNumber = function (num) {
  return num * num;
};
```

So why would you want to use a function expression if it seems more error-prone? The answer lies with where and when you need to access the function.

### Scope

Where a function, variable, or class can be referenced is a called **scope** and when possible, it's best-practice to avoid doing something called **polluting the global scope**. Anything in the global scope can be accessed throughout all our code. In our case, being able to access our `squareNumber` function anywhere in our code might not seem so bad, but what if our calculator app was just a small part of a much larger project with many developers all declaring functions in the global scope? Aside from the performance and memory issues that can occur with overloading the global scope, eventually there would probably be a clash with two or more developers all using the same name for functions doing different things, leading to bugs and unexpected results.

Instead, we should try and keep functions available only where and when they're needed. i.e. limit their scope to only what's essential. This is where can use function expressions to our advantage because they can be **anonymous**, meaning that if we're only using them once, for example as a **callback** function (a function passed as an argument into another function) we don't have to name them and therefore avoid running the risk of polluting the global scope.

Let's use JavaScript's in-built `setTimeout` function to illustrate. This takes two parameters: a callback function and the amount of time we want to wait before executing the callback (in milliseconds).

Let's first use a function declaration to create a function named `greeting` to pass into the `setTimeout` function:

```javascript
function greeting() {
  console.log('Hello, World!');
}

setTimeout(greeting, 2000);
// 'Hello, World' is printed to the console after two seconds
```

The issue here is that we probably don't need to use our greeting function elsewhere in the our code. It will hog precious memory and we might want to use the function name `greeting` for something else. To avoid this, let's pass an **anonymous function expression** directly into `setTimeout` as the callback function instead:

```javascript
setTimeout(function () {
  console.log('Hello, World!');
}, 2000);
// 'Hello, World' is printed to the console after two seconds
```

## Summary

Hopefully you now have a better idea on the differences between function declarations and function expressions, and when to use one instead of the other. Remember, just like the head of an elite spy agency, you should work on a need-to-know basis!
