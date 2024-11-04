// JavaScript Fundamentals
`1. What are the different data types in JavaScript?
Answer:
JavaScript has several data types, which are broadly categorized as primitive and non-primitive (also called reference types).

1. Primitive Data Types:-
Primitive data types are immutable (cannot be modified) and are stored directly in the memory.

i:String-

Used for textual data.
Defined by single ('...'), double ("..."), or backticks for template literals.
Example:`
let name = "Mamun";

`ii:Number-

Used for all numbers, whether they are integers or floating-point values.
JavaScript does not have separate types for integers and floats.
Example:`
let age = 25;
let price = 19.99;

`iii:BigInt

Represents integers of arbitrary precision, useful for very large numbers.
Defined by appending n to an integer.
Example:`
let bigNumber = 123456789012345678901234567890n;

`iv:Boolean

Represents a logical entity and can have only two values: true or false.
Example:`
let isStudent = true;

`v:Undefined

A variable that has been declared but not assigned a value has the value undefined.
Example:`
let result;
console.log(result);

`vi:Null

Represents an intentional absence of any object value.
null is not the same as undefined; null is an assignment value, while undefined means a variable has been declared but not yet assigned.
Example:`
let car = null;

`vii:Symbol

A unique and immutable data type introduced in ES6, often used to create unique keys for objects.
Example:`
let uniqueID = Symbol('id');


`2. Non-Primitive (Reference) Data Types
These types are stored as references in memory rather than directly as a value.
i:Object

A collection of properties, where each property is a key-value pair.
Objects can also include functions, which are called methods.
Example:`
let person = {
  name: "Alice",
  age: 25
};

`ii:Array

A special type of object used to store ordered collections.
Arrays can contain elements of any type, including other arrays and objects.
Example:`
let numbers = [1, 2, 3, 4, 5];

`iii:Function

Functions in JavaScript are also objects and can be assigned to variables, passed as arguments, and returned from other functions.
Example:`
function greet() {
  return "Hello!";
}

`
iv:Date
Represents a specific point in time and is part of JavaScript's Date object.
Example
`
let now = new Date();





//2.What is the difference between var, let, and const?
`Answer:
In JavaScript, var, let, and const are used to declare variables, but they have different characteristics in terms of scope, hoisting, and mutability.

var-

Scope: var is function-scoped, meaning it’s accessible within the function it was declared in, but not outside of it. However, if declared outside of a function, it’s globally scoped.

Hoisting: var declarations are hoisted to the top of their scope. This means that you can use a var variable before it’s declared, though it will be undefined until the actual line of assignment.

Reassignment and Redeclaration: Variables declared with var can be reassigned and redeclared within the same scope without errors.`

function example() {
    console.log(value); 
    var value = 10;
    console.log(value); 
  }
  example();
  var x = 5;
var x = 10; 

`
let-
Scope: let is block-scoped, meaning it is only accessible within the block { ... } it was declared in (e.g., within loops, if statements, etc.).

Hoisting: let is also hoisted, but unlike var, it is not initialized as undefined. This means you can’t use it before declaration — it will throw a ReferenceError.

Reassignment and Redeclaration: let variables can be reassigned but cannot be redeclared within the same scope.
`
if (true) {
    let age = 25;
    console.log(age); 
}
console.log(age); 
let y = 5;
y = 10; 
let y = 15; // Error, 

`
const-
Scope: Like let, const is also block-scoped.

Hoisting: const is hoisted but not initialized, similar to let. Attempting to use a const variable before its declaration will result in a ReferenceError.

Reassignment and Redeclaration: Variables declared with const cannot be reassigned or redeclared. const is intended for values that should remain constant (immutable) after assignment.

Mutable Objects: Although const prevents reassignment of the variable, it does not make objects or arrays immutable. You can still modify the contents of a const object or array.
`
const z = 20;
z = 30; 

const person = { name: "Alice" };
person.name = "Bob"; 
console.log(person.name); 






//3. Explain JavaScript's == vs. === operators
`Answer:
In JavaScript, == and === are comparison operators, but they function differently in terms of type checking.
== (Loose Equality)
The == operator compares values for equality but performs type conversion if the variables are of different types.

This is called "type coercion," meaning JavaScript will attempt to convert one or both values to a common type before making the comparison.

This can sometimes lead to unexpected results due to automatic type conversion.`
5 == "5";      
0 == false;    
null == undefined; 

`=== (Strict Equality)
The === operator, often called "strict equality," compares both value and type without performing any type conversion.

If the two values have different types, === will return false immediately.
`
5 === "5";   
0 === false; 
null === undefined; 




//4. What is type coercion in JavaScript? Give an example.

`Answer:
Type coercion in JavaScript is the automatic or implicit conversion of values from one data type to another. JavaScript often performs type coercion to complete operations when values of different types are used together in expressions.

Type coercion can occur in two forms:

Implicit Coercion: JavaScript automatically converts the type.
Explicit Coercion: You manually convert a type using methods like Number(), String(), or Boolean().
Implicit Type Coercion
JavaScript implicitly coerces types in situations like equality checks (==) and arithmetic operations involving different types.
Example of Implicit Type Coercion with ==`
console.log("5" == 5);  
console.log(false == 0);

`Explicit Type Coercion
You can perform type conversion explicitly using functions:

Number()  Converts a value to a number.
String()  Converts a value to a string.
Boolean()  Converts a value to a boolean.
Example of Explicit Type Coercion`
console.log(Number("123")); 
console.log(String(456));    
console.log(Boolean(1)); 



//5. Explain the concept of scope in JavaScript.
`Answer:
Scope in JavaScript refers to the context in which variables and functions are accessible. It defines where a variable can be used or accessed in a codebase.

1. Global Scope
Variables declared outside any function or block are in the global scope.

These variables are accessible from anywhere in the code.

In browsers, global variables become properties of the window object.`
var globalVar = "I'm global!";

function checkScope() {
  console.log(globalVar); 
}
checkScope(); 
console.log(globalVar); 

`2. Function Scope
Function scope applies to variables declared with var within a function.

Variables with function scope are only accessible within that function and cannot be accessed from outside it.

Each function has its own scope, so variables with the same name in different functions are independent.`
function outerFunction() {
  var innerVar = "I'm inside a function!";
  console.log(innerVar);
}
outerFunction();
console.log(innerVar); 

`3. Block Scope
Block scope applies to variables declared with let or const within a block, such as inside loops, if statements, or other blocks defined by { ... }.

Block-scoped variables are only accessible within that block.

let and const provide block scope, but var does not.`
if (true) {
  let blockVar = "I'm block scoped!";
  console.log(blockVar); 
}

console.log(blockVar);

`4. Lexical (or Static) Scope
JavaScript uses lexical scoping, meaning the scope of a variable is determined by its location in the source code.

Inner functions have access to variables defined in their outer functions, even after the outer function has completed execution.

Lexical scope enables closures, where an inner function retains access to the outer function's variables even after the outer function has finished running.
`
function outerFunction() {
  let outerVar = "I'm from outer scope!";

  function innerFunction() {
    console.log(outerVar); 
  }

  return innerFunction;
}

const myInnerFunc = outerFunction();
myInnerFunc();




//6. What is hoisting in JavaScript?
`Answer:
Hoisting in JavaScript is a behavior where variable and function declarations are "moved" to the top of their containing scope during the compile phase. This means that variables and functions can be referenced before they are declared in the code, although there are some differences in how hoisting works for var, let, const, and function declarations.

Hoisting Works-
JavaScript moves (or "hoists") the declaration of variables and functions to the top of their scope (global or function scope) but not the initialization.

Hoisting of var Declarations
Variables declared with var are hoisted to the top of their function or global scope and are initially assigned the value undefined.

This is why you can access a var variable before it is defined, but it will return undefined until it is assigned a value.`
console.log(a);
var a = 5;
console.log(a); // 5

`Hoisting of let and const Declarations
Variables declared with let and const are also hoisted, but they are not initialized. Instead, they are in a "temporal dead zone" (TDZ) from the start of the block until the declaration line is reached.

Accessing a let or const variable before its declaration results in a ReferenceError.`
console.log(b); 
let b = 10;

`Hoisting of Function Declarations
Function declarations (e.g., function myFunc() { ... }) are fully hoisted, including both the declaration and the function definition.

This allows you to call a function before its declaration in the code.`
greet(); 
function greet() {
  console.log("Hello!");
}

`Hoisting of Function Expressions and Arrow Functions
Function expressions and arrow functions (e.g., const greet = function() { ... }) are hoisted like let and const variables: the variable itself is hoisted, but the assignment (the function definition) is not.

If you try to call them before declaration, you will get a ReferenceError.`
sayHello(); 
const sayHello = function() {
  console.log("Hello!");
};



// 7. What are template literals, and how are they used?
`Answer:
Template literals in JavaScript, introduced in ES6, are an enhanced way to create strings. They use backticks (`...`) instead of single ('...') or double ("...") quotes, and provide powerful features such as string interpolation, multi-line strings, and embedded expressions.

Key Features of Template Literals

1. String Interpolation

Template literals allow variables and expressions to be embedded directly within strings using` ${...} `syntax.
This is helpful for inserting variables or calculations without needing to use string concatenation.`
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); 


`2. Multi-line Strings

Template literals make it easy to create multi-line strings without needing escape characters (\n).
Just add line breaks directly in the template literal.`
const message = `This is a multi-line string.
You can use template literals
to include new lines directly.`;
console.log(message);

`3. mbedded Expressions

Template literals support embedding JavaScript expressions within` ${...}`so calculations and function calls can be directly included in strings.
Any valid JavaScript expression can be used.`
const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 10 and 20 is 30.

`4. Tagged Templates

A more advanced feature, tagged templates allow you to use a function to process a template literal.
A tag function takes the template literal as arguments, breaking it into strings and expressions, which allows for customized processing or transformation of the template.`
function emphasize(strings, ...values) {
  return strings[0] + values.map((value, i) => `**${value}**` + strings[i + 1]).join('');
}

const name = "Alice";
const age = 25;
console.log(emphasize`Name: ${name}, Age: ${age}`);




//7. Explain what a higher-order function is in JavaScript.
`Answer:
A higher-order function in JavaScript is a function that does at least one of the following:

Takes one or more functions as arguments.
Returns a function as its result.
Higher-order functions are a core part of functional programming and allow for abstracting operations, making code more modular and expressive.`

`Characteristics of Higher-Order Functions

1. Accepting Functions as Arguments

A higher-order function can accept other functions as parameters, allowing you to apply custom behavior by passing different functions as arguments.`
function greet(name, formatter) {
  return formatter(name);
}

function toUpperCase(name) {
  return name.toUpperCase();
}
console.log(greet("Alice", toUpperCase)); 

`2. Returning Functions

A higher-order function can return a new function. This can be used to create function factories or function customization.`
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 

`3. Enabling Function Composition and Reusability

By taking and returning functions, higher-order functions enable function composition and reuse. Functions like map, filter, and reduce are commonly used higher-order functions in JavaScript.`
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); 

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 



//9. What are arrow functions, and how are they different from regular functions?
`Answer:
Arrow functions in JavaScript, introduced in ES6, are a shorter syntax for writing functions. They use the => arrow syntax, and offer some differences in behavior compared to regular functions, particularly in how they handle the this keyword.

Syntax of Arrow Functions-
Arrow functions are defined using parentheses and an arrow (=>). Here’s the basic syntax:`
// Single-line arrow function with an implicit return
const add = (a, b) => a + b;
console.log(add(2, 3));

// Multi-line arrow function with an explicit return
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(2, 3)); 

`Differences Between Arrow Functions and Regular Functions

1. this Binding

Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical scope, which is the context in which they are defined.
This behavior makes arrow functions especially useful as callback functions or in object methods where you want this to refer to the surrounding context`
// Regular function
function Person() {
  this.age = 0;
  setInterval(function() {
    this.age++; 
    console.log(this.age);
  }, 1000);
}

// Arrow function
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const person = new Person();

`2. Syntax and Conciseness

Arrow functions provide a concise syntax, especially for single-line functions or functions with a single parameter (you can omit parentheses around the parameter).`
// Single parameter - parentheses can be omitted
const square = x => x * x;

// Multiple parameters - parentheses are required
const add = (a, b) => a + b;

`3. Implicit Return

For single-line arrow functions, the return statement can be omitted. The value of the expression will be returned automatically.
This only works if the function body has no curly braces {} around it.`

const double = x => x * 2; // Implicit return
const add = (a, b) => { return a + b; }; 

`4.No arguments Object

Arrow functions do not have their own arguments object, which is typically available in regular functions. Instead, if needed, you can use rest parameters (...args) to handle function arguments.`
function regularFunction() {
  console.log(arguments); 

const arrowFunction = () => {
  console.log(arguments); 
};

const arrowWithRest = (...args) => {
  console.log(args); 
};

`5.Cannot Be Used as Constructors

Arrow functions cannot be used as constructors. Attempting to use an arrow function with new will result in an error.
This is because arrow functions do not have their own this, which is required for creating instances in constructor functions.`
const Person = (name) => {
  this.name = name;
};

const person = new Person("Alice");

`6. No prototype Property

Arrow functions do not have a prototype property, so they cannot be used to create object methods or instances with the prototype chain.
`



// 10. What is an Immediately Invoked Function Expression (IIFE)?
`Answer:
An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed immediately after it is created.
Syntax of an IIFE-`
(function() {
  // Code inside this function runs immediately
  console.log("IIFE executed");
})();
`Or, using arrow function syntax:`
(() => {
  console.log("IIFE with arrow function");
})();

