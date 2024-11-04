//1. How does JavaScript handle implicit type conversion?
Answer:
`JavaScript performs implicit type conversion, also known as type coercion, when it encounters values of different types in operations where it expects a specific type. This automatic conversion helps JavaScript execute operations without throwing errors, but it can sometimes lead to unexpected results. Type coercion in JavaScript occurs in three main situations: string coercion, number coercion, and boolean coercion.

1. String Coercion
When one operand in an operation is a string, JavaScript converts the other operand(s) to a string and concatenates them.`

console.log("The result is " + 42);    
console.log("3" + 5 + 2);               
console.log(3 + 5 + "2");              

`2. Number Coercion
JavaScript often converts values to numbers in arithmetic operations, comparisons, and when using the + operator with non-string values.

Arithmetic Operations: When you use operators like -, *, /, or %, JavaScript converts the operands to numbers.`
console.log("5" - "2");   
console.log("10" * 2);           
console.log("6" / "3"); 

`Unary + Operator: Using + before a value attempts to convert it to a number.`
console.log(+ "42");               
console.log(+ true);    
console.log(+ false);    
console.log(+ "hello"); 

`Comparisons: In comparisons (==, <, >, etc.), JavaScript will try to convert non-numeric operands to numbers if one of the operands is a number.`
console.log("5" < 10);
console.log("5" == 5);

`3. Boolean Coercion
Values are implicitly converted to true or false in contexts that expect a boolean, such as in if statements or logical operators (&&, ||).

Falsy Values: In JavaScript, the following values are considered falsy (evaluate to false):

0
"" (empty string)
null
undefined
NaN
false
Any other value is considered truthy and evaluates to true.`

if (0) console.log("This won’t run");    
if ("") console.log("This won’t run");    
if ("hello") console.log("This will run");
console.log(null || "default");          
console.log("value" && "next");



//2. What does typeof return for different data types?

`Answer:
The typeof operator in JavaScript is used to determine the type of a value. It returns a string that indicates the data type. 

1. Primitive Types-`

undefined: typeof undefined;

boolean: `Represents a logical entity with two possible values: true and false.`
typeof true;    
typeof false; 

number: `Represents both integers and floating-point numbers.`
typeof 42; 
typeof 3.14; 
typeof NaN;  

bigint:` Represents integers with arbitrary precision.`
typeof 123n;

string:` Represents sequences of characters.string: Represents sequences of characters.`
typeof "hello";  
typeof ''; 

symbol: `Represents unique identifiers, often used for object property keys.`
typeof Symbol();

`2. Structural Types`
object:` Used for non-primitive values, such as objects, arrays, and null`
Objects: typeof { name: "Alice" };
Arrays: typeof [1, 2, 3]; 
null: typeof null;   

`3. Functions
function: Functions are a special type of object in JavaScript, but typeof recognizes them as "function".`
typeof function() {};
typeof (() => {});



//3. What is NaN, and how can you check if a value is NaN?
Answer:

`NaN stands for "Not-a-Number." It is a special floating-point value defined by the IEEE floating-point standard to represent a value that is undefined or unrepresentable, especially in the context of numerical computations. Common scenarios where NaN might appear include:

The result of 0/0 (division by zero).
The square root of a negative number in the realm of real numbers.
Operations that result in an undefined numerical value.

Checking for NaN
In many programming languages, you can check if a value is NaN using specific functions or methods. Here are a few examples in different programming languages:`

JavaScript: let value = NaN;
console.log(isNaN(value));