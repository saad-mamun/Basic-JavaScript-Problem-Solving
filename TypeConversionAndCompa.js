// 1. How does JavaScript handle implicit type conversion?
Answer:
`JavaScript performs implicit type conversion, also known as type coercion, to convert values from one type to another automatically when it encounters operations or comparisons that require different types. This behavior is part of JavaScript's dynamic typing system. Here's a breakdown of how it works:

1. Arithmetic Operations
When using arithmetic operators (+, -, *, /), JavaScript converts operands to numbers when possible.`

Addition with Strings: console.log(5 + '5');

Subtraction and Other Operations:console.log('5' - 2);

`2. Comparison Operators
When using comparison operators (==, ===, <, >), JavaScript performs type conversion in the following ways:`

Loose Equality (==): console.log(5 == '5');

Strict Equality (===):console.log(5 === '5');

`3. Logical Operators
JavaScript converts values to booleans when used in logical contexts (&&, ||, !).`

Truthiness and Falsiness:
if (0) {
    console.log("This won't run");
  }

`4. Function Calls and Objects`
`When passing arguments to functions, JavaScript converts the values to the expected types if needed.

For example, when passing an object to a function that expects a number, JavaScript tries to convert the object to a primitive value.`

`5. ToString and ToNumber Conversions
JavaScript has internal methods for converting values to strings or numbers, which are triggered during type coercion:

ToString: When an object is converted to a string, its toString() method is called.
ToNumber: Various rules are applied to convert strings and booleans to numbers.`




//2.What does typeof return for different data types?
Answer:
`The typeof operator in JavaScript is used to determine the type of a given variable or value. It returns a string that indicates the type of the unevaluated operand. 

1. Primitive Types`

Undefined:
let a;
console.log(typeof a);

Null:
let b = null;
console.log(typeof b);

Boolean:
let c = true;
console.log(typeof c);

Number:
let d = 42;
console.log(typeof d);

String:
let e = "hello";
console.log(typeof e); 

Symbol (introduced in ES6):
let f = Symbol('sym');
console.log(typeof f); 

BigInt (also introduced in ES2020):
let g = 1234567890123456789012345678901234567890n;
console.log(typeof g); 


2. Reference Types

Object:
let h = { name: "Alice" };
console.log(typeof h); 

Array:
let i = [1, 2, 3];
console.log(typeof i); 

Function:
let j = function() {};
console.log(typeof j);

Date:
let k = new Date();
console.log(typeof k);


//3. What is NaN, and how can you check if a value is NaN?
Answer:
`NaN stands for "Not-a-Number." It is a special value in JavaScript and many other programming languages that represents a value that is not a valid number. NaN typically occurs in the following situations:

The result of dividing zero by zero (0/0).
The square root of a negative number (in the context of real numbers).
The result of an invalid mathematical operation (e.g., Math.sqrt(-1)).
Characteristics of NaN
Type: The type of NaN is number, as shown by typeof NaN, which returns "number".
Comparisons: NaN is unique in that it is not equal to any value, including itself. This means that NaN === NaN will return false.
Falsiness: NaN is considered a falsy value, so it behaves like false in boolean contexts.`

`Checking for NaN
To check if a value is NaN, you can use the following methods:

1.Using isNaN() Function: The global isNaN() function can be used to check for NaN. However, it first converts the value to a number, which can lead to some unintended results.`
console.log(isNaN(NaN));
console.log(isNaN('hello'));
console.log(isNaN(123));   

`2. Using Number.isNaN() Method: The Number.isNaN() method provides a more reliable way to check for NaN, as it does not perform type coercion. It only returns true for actual NaN values.`
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('hello'));
console.log(Number.isNaN(123)); 

`3. Comparing with NaN: You can check if a value is NaN by comparing it directly, but remember that this is not reliable because NaN is not equal to itself.`
let value = NaN;
console.log(value !== value); 