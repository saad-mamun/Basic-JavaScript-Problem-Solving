//1. Explain the concept of closures in JavaScript.
`Answer:
A closure in JavaScript is a feature where an inner function has access to the variables and parameters of its outer function, even after the outer function has finished executing. 

Closures Work-

A closure is formed when:

 i. A function is defined inside another function (the outer function).
 ii. The inner function references variables from the outer function's scope.
iii. The inner function is returned or passed out of the outer function, allowing it to be used outside of the outer function’s execution context.`

`Example of Closure`
function createCounter() {
    let count = 0; 
  
    return function() {  
      count++;        
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  



//2. What is the this keyword, and how does it behave in different contexts?
`Answer:
The this keyword in JavaScript is a special identifier that refers to the context in which a function is called, rather than where it is defined. Its behavior changes depending on where and how a function is invoked.

Behavior of this in Different Contexts:-

1. Global Context (Global Scope)

When this is used in the global scope (outside any function or object), it refers to the global object.
In a browser, this is typically the window object. In Node.js, it’s the global object.`
console.log(this);

`2. Object Method

When this is used inside a method of an object, it refers to the object that called the method.`
const person = {
    name: "Alice",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
person.greet();

`3. Constructor Function (new Keyword)

When using this inside a constructor function (or class), this refers to the instance being created.
The new keyword creates a new object and sets this to refer to that new object.`
function Person(name) {
    this.name = name;
  }
const alice = new Person("Alice");
console.log(alice.name); 

`4. Event Handlers

In DOM event handlers, this usually refers to the HTML element that received the event.`
<button id="myButton">Click me</button>
<script>
  document.getElementById("myButton").addEventListener("click", function() {
    console.log(this)
  });
</script>



//3. How do you create an object in JavaScript?
`Answer:
In JavaScript, there are several ways to create objects, each with its own use cases.

1. Object Literal Notation
Object literals are the most straightforward and commonly used way to create objects. You simply define key-value pairs inside curly braces {}.`
const person = {
    name: "Alice",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  console.log(person.name);
  person.greet();

`2. Using the Object Constructor
JavaScript provides a built-in Object constructor that you can use to create an empty object, to which you can then add properties.`
const person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

console.log(person.name); 
person.greet(); 

`3. Using a Constructor Function
Constructor functions are used to create multiple instances of an object with similar properties. They are regular functions, but by convention, the first letter is capitalized to indicate that they are constructors. When you use the new keyword, this inside the constructor function refers to the newly created object.`

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  
  const person1 = new Person("Charlie", 35);
  const person2 = new Person("Dana", 28);
  
  console.log(person1.name); 
  person1.greet(); 
  


// 4. What is the difference between null and undefined?
`Answer:
In JavaScript, null and undefined are two distinct types that often lead to confusion, but they represent different concepts. 

1. Definition

i. undefined:

This is a primitive value automatically assigned to variables that have been declared but not yet assigned a value. It indicates the absence of a value or a non-existence of a variable.
When a function does not return a value, it implicitly returns undefined.
let x;`
console.log(x); // Output: undefined

`ii. null:

This is also a primitive value, but it represents the intentional absence of any object value. It is often used to signify that a variable should have no value.
It is typically assigned to variables as a placeholder to indicate that a variable has been deliberately set to "no value."`

`Comparison
When comparing null and undefined using the loose equality operator (==), they are considered equal, but they are not equal with the strict equality operator (===).`
console.log(null == undefined);  // Output: true
console.log(null === undefined); // Output: false



// 5. How do you copy an object in JavaScript? Explain shallow vs. deep copy.
`Answer:
Copying objects in JavaScript can be done in various ways, and it's important to understand the difference between shallow copy and deep copy as they handle nested objects differently.

Shallow Copy-
A shallow copy creates a new object, but it only copies the top-level properties. If the original object contains nested objects (objects within objects), the references to those nested objects are copied, not the actual objects. As a result, changes to nested objects in the copied object will affect the original object and vice versa.

Create a Shallow Copy-
1. Using Object.assign():
2. Using the Spread Operator (...):
Example of Shallow Copy
`
const original = { 
    name: "Alice", 
    age: 25, 
    address: { city: "New York" }
  };
  
  const shallowCopy = { ...original };
  
  shallowCopy.name = "Bob";
  shallowCopy.address.city = "Los Angeles";
  
  console.log(original.name); 
  console.log(original.address.city); 

`Create a Deep Copy-
  1.Using JSON Methods:
  2.Using Libraries:`
  `Example of Deep Copy`
  const original = { 
    name: "Alice", 
    age: 25, 
    address: { city: "New York" }
  };
  
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  deepCopy.name = "Bob";
  deepCopy.address.city = "Los Angeles";
  
  console.log(original.name); // Output: Alice (unchanged)
  console.log(original.address.city); // Output: New York (unchanged)
  



//6. Explain how call, apply, and bind work in JavaScript.
`Answer:
In JavaScript, call, apply, and bind are methods that allow you to control the value of this in functions.` 
`1. call()
The call() method allows you to call a function with a specified this value and individual arguments. The first argument passed to call() is the value that this should refer to inside the function, and any subsequent arguments are passed to the function as regular arguments`
//SYNTAX
func.call(thisArg, arg1, arg2, ...);
//Example
function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
  
  const person = { name: "Alice" };
  
  greet.call(person, "Hello");

`2. apply()
The apply() method is similar to call(), but instead of passing arguments individually, you pass them as an array (or an array-like object). This is particularly useful when you want to pass an array of arguments to a function.`
// Syntax
func.apply(thisArg, [argsArray]);
// Example
function introduce(language1, language2) {
    console.log(`Hello, my name is ${this.name} and I speak ${language1} and ${language2}`);
}
const person = { name: "Bob" };
introduce.apply(person, ["English", "Spanish"]); 

`3. bind()
The bind() method creates a new function that, when called, has its this keyword set to the provided value. Unlike call() and apply(), bind() does not immediately invoke the function. Instead, it returns a new function that can be called later with the specified this context.`

// Syntax
const newFunc = func.bind(thisArg[, arg1[, arg2[, ...]]]);
// Example
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}
const person = { name: "Charlie" };
const greetCharlie = greet.bind(person);
greetCharlie(); 



//7. What is the prototype chain, and how does inheritance work in JavaScript?
`Answer:
In JavaScript, the prototype chain is a fundamental concept that enables inheritance and the sharing of properties and methods among objects. Understanding this concept is crucial for working effectively with objects and creating reusable code.

1. Prototypes in JavaScript
Every JavaScript object has a property called prototype, which is a reference to another object. This prototype object can also have its own prototype, creating a chain of prototypes, known as the prototype chain.

2. the Prototype Chain Works
Object Creation: When you create a new object, it automatically inherits properties and methods from its prototype.
Property Lookup: If you access a property or method on an object, JavaScript checks the object itself first. If it doesn't find it, it checks the prototype of that object, then the prototype of the prototype, and so on, until it reaches null.`
const animal = {
    sound: "Generic animal sound",
    makeSound() {
      console.log(this.sound);
    }
  };
  const dog = Object.create(animal); 
  dog.sound = "Woof!";
  dog.makeSound();
  animal.makeSound(); 
 ` 
3. Inheritance in JavaScript
  Inheritance in JavaScript is primarily achieved through the prototype chain. There are a few common patterns to implement inheritance:
  
  a. Constructor Functions
  You can use constructor functions to create objects and set up inheritance through prototypes.`
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  function Dog(name) {
    Animal.call(this, name); 
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; 
  
  Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
  };
  
  const dog = new Dog("Rex");
  dog.speak(); // Output: Rex barks.
  

`  b. ES6 Classes
With ES6, JavaScript introduced a clearer syntax for defining classes and inheritance using the class keyword.`
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  const dog = new Dog("Buddy");
  dog.speak(); 
  
`  4. Prototype Chain Example
  Here’s a simple example illustrating the prototype chain:`
  const person = {
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  const john = Object.create(person);
  john.name = "John";
  john.greet();
  console.log(john.toString());
  