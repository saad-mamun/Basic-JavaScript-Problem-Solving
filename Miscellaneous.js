//1. What is event delegation, and how does it work?
Answer:
`Event delegation is a design pattern in JavaScript that allows you to handle events more efficiently, especially in dynamic web applications where elements are frequently added or removed from the DOM.

Event Delegation Works-

Normally, you might add an event listener to each individual element you want to respond to. However, with event delegation, you take advantage of event bubbling to attach a single event listener to a parent element. Here’s a step-by-step overview of how it works:

 1. Event Bubbling: When an event is triggered on an element (e.g., a click on a button), it first runs the event handlers on that element, then “bubbles up” the DOM tree to its parent elements, triggering event handlers on each ancestor along the way until it reaches the root of the document.

 2. Attach Listener to a Parent Element: Instead of adding event listeners to each child element, you add one listener to a common parent element.

 3. Filter Events by Target: Within the event handler on the parent element, you can check the event.target property to determine which child element triggered the event. Then, based on this information, you can apply specific logic only to the intended elements.`

//  Example of Event Delegation

  document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('You clicked on:', event.target.textContent);
    }
  });




//2. What are default parameters in JavaScript?
Answer:
`Default parameters in JavaScript allow you to set default values for function parameters. This feature was introduced in ES6 (ECMAScript 2015) and helps make your functions more flexible and less prone to errors when arguments are missing.

Default Parameters Work-

When you define a function, you can set a default value for any parameter. If an argument is not passed or if it’s undefined, the function will use the default value. If an argument is provided, it will override the default value.`
// Syntax
function myFunction(param1 = defaultValue1, param2 = defaultValue2) {
    // Function body
}



//3. What is the difference between synchronous and asynchronous programming?
Answer:
`Synchronous and asynchronous programming are two different approaches to handling tasks and operations in programming, especially when dealing with I/O operations, network requests, and user interactions. 

Synchronous Programming-
In synchronous programming, tasks are executed sequentially, one after the other. Each task must complete before the next one starts. This approach is straightforward, but it can lead to performance bottlenecks if a task takes a long time to complete, as the entire program waits until that task finishes before moving on.

Characteristics of Synchronous Programming-

Blocking: When a task is running, it blocks the execution of other tasks until it’s completed.

Sequential Execution: Tasks are executed in the order they are called.

Simple Logic: Easier to understand and debug, as tasks run in a linear, predictable sequence.
`
// Example of Synchronous
console.log("Start");

function syncFunction() {
  for (let i = 0; i < 1000000000; i++) {} // Time-consuming loop
  console.log("Synchronous task complete");
}

syncFunction(); // Blocks until finished
console.log("End");


`Asynchronous Programming-

Asynchronous programming allows tasks to run independently of the main program flow. Instead of waiting for a task to complete before moving on, the program can continue executing other tasks. When the asynchronous task finishes, it notifies the program and executes any specified callback functions or promises.

Characteristics of Asynchronous Programming-

Non-blocking: The program doesn’t have to wait for an asynchronous task to complete; it can proceed with other tasks.

Parallel Execution: Multiple tasks can be initiated and completed independently.

Complex Logic: Often requires handling of callbacks, promises, or async/await syntax to manage flow, but it improves responsiveness.`

// Example of Asynchronous 
console.log("Start");

function asyncFunction() {
  setTimeout(() => {
    console.log("Asynchronous task complete");
  }, 2000); // Simulates a delay (e.g., API call or database query)
}

asyncFunction(); // Executes asynchronously
console.log("End");


//4. How does the setTimeout function work, and what is its use?
Answer:
`The setTimeout function in JavaScript is used to execute a function or a block of code after a specified delay. It's commonly used for delaying actions, scheduling tasks, and managing asynchronous behavior in web applications.

setTimeout Works-
setTimeout takes two primary arguments:

Function or Code: The function you want to execute after the delay.

Delay (in milliseconds): The time, in milliseconds, to wait before executing the function. One second is 1000 milliseconds.`

// Example of setTimeout
console.log("Start");

setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);
console.log("End");

`Common Use Cases for setTimeout-

   1. Delaying Code Execution: Running a function after a certain delay, such as showing a message after a specific time.

   2. Creating Animation Effects: Triggering animations or transitions with delays.

   3. Simulating Asynchronous Operations: Mimicking network latency or other delays during testing and development.

   4. Deferring Work: Breaking up heavy computations by deferring them slightly to avoid blocking the main thread.`




//5.What is the purpose of JSON.stringify() and JSON.parse()?
Answer:
`The JSON.stringify() and JSON.parse() functions in JavaScript are used to convert data between JavaScript objects and JSON (JavaScript Object Notation) format.

JSON.stringify()-

JSON.stringify() is used to convert a JavaScript object or array into a JSON string. This is especially useful when you need to store data or send it over a network, as JSON strings are text-based and can be easily transmitted.`

// Example of JSON.stringify()
const person = {
    name: "Alice",
    age: 25,
    isStudent: false,
    hobbies: ["reading", "traveling"]
  };
  
  const jsonString = JSON.stringify(person);
  console.log(jsonString);


`JSON.parse()-

  JSON.parse() is used to convert a JSON string back into a JavaScript object. This is commonly used when receiving JSON data from a web server or an API, as it converts the JSON string into a format that JavaScript can work with directly.`

// Example of JSON.parse()
const jsonString = '{"name":"Alice","age":25,"isStudent":false,"hobbies":["reading","traveling"]}';

const personObject = JSON.parse(jsonString);
console.log(personObject);


//6.How can you handle asynchronous code in JavaScript?
Answer:
`Handling asynchronous code in JavaScript is essential for building responsive and efficient applications, especially when working with I/O tasks like API calls, file reading, or user interactions.

1. Callbacks
A callback is a function passed as an argument to another function and is invoked after the completion of an asynchronous operation. This was the primary method for handling asynchronous tasks in JavaScript before promises and async/await became widespread.
`
// Example Using Callbacks
function fetchData(callback) {
    setTimeout(() => {
      callback("Data received");
    }, 1000); // Simulates a delay of 1 second
  }
  
  fetchData((result) => {
    console.log(result); // Output after 1 second: "Data received"
  });
  
`  2. Promises
  Promises provide a cleaner and more manageable approach to handling asynchronous code. A promise represents the eventual result of an asynchronous operation. Promises can be in one of three states: pending, fulfilled, or rejected. They allow chaining with .then() and .catch() methods, making it easier to handle sequences of asynchronous operations.`
  
//   Example Using Promises
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });
  }
  
  fetchData()
    .then((result) => {
      console.log(result); // Output after 1 second: "Data received"
    })
    .catch((error) => {
      console.error(error);
    });

`3. Async/Await
    async and await provide a syntax that looks synchronous but runs asynchronously, built on top of promises. With async/await, you can write asynchronous code that is more readable and looks similar to traditional synchronous code.`
    
// Example Using Async/Await

`4. Handling Multiple Promises
When working with multiple asynchronous tasks, JavaScript provides several methods, including Promise.all, Promise.allSettled, and Promise.race, each of which handles arrays of promises differently.`

`Promise.all: Waits until all promises are resolved (or rejects if any promise fails).`
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Array of results if all promises succeed
  })
  .catch((error) => {
    console.error(error); // Error if any promise fails
  });

`Promise.allSettled: Resolves after all promises settle (either fulfilled or rejected), returning an array of results with their status.`
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Array of {status, value/reason} objects
  });

`Promise.race: Resolves or rejects as soon as any one of the promises settles.`
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // The result of the first settled promise
  })
  .catch((error) => {
    console.error(error); // Error if the first settled promise fails
  });

`5. Using setTimeout for Delays
setTimeout is often used for simple delays and can work in conjunction with promises or async functions for asynchronous operations, even though it is not directly related to promises`
function delayedLog() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executed after 1 second");
      resolve();
    }, 1000);
  });
}

async function runDelay() {
  await delayedLog();
  console.log("Continuing after delay");
}
runDelay();



//7. Explain the concept of the Event Loop in JavaScript.
Answer:
`The Event Loop in JavaScript is a mechanism that enables asynchronous programming by managing the execution of multiple pieces of code. It allows JavaScript to handle non-blocking I/O operations and ensures that tasks like user interactions, API calls, and timeouts are processed without blocking the main thread. 

Key Concepts in the Event Loop
To understand the event loop, it's important to know about:

Call Stack
Web APIs (or Browser APIs)
Callback Queue (or Task Queue)
Microtask Queue
Event Loop
Let’s break down each component and see how they interact in the event loop.

1. Call Stack
The call stack is a stack data structure used by JavaScript to keep track of function execution. When a function is called, it’s pushed onto the top of the call stack, and when it finishes, it’s popped off. JavaScript executes each function in a single-threaded, synchronous manner, meaning it can only do one thing at a time in the call stack.

2. Web APIs (Browser APIs)
Certain functions in JavaScript, like setTimeout, HTTP requests (e.g., fetch), and DOM events, are asynchronous and handled by the browser’s Web APIs (or Node.js APIs in a non-browser environment). These APIs are not part of the JavaScript engine itself; instead, they run in the browser's background and don’t block the main thread. When an asynchronous operation completes, it sends a callback to the task queue or the microtask queue, depending on the type of task.

3. Callback Queue (Task Queue)
The callback queue, or task queue, holds tasks that are ready to be executed. These tasks could be callbacks from setTimeout, event listeners, or other asynchronous operations. Once the call stack is empty, the event loop pushes tasks from the callback queue onto the call stack for execution, one at a time.

4. Microtask Queue
The microtask queue (or job queue) is a separate queue specifically for microtasks. Microtasks include Promise callbacks and MutationObserver callbacks. The microtask queue has higher priority than the callback queue, so all tasks in the microtask queue are executed before the event loop processes the next task in the callback queue.

5. Event Loop
The event loop constantly monitors the call stack and the task queues. Its main job is to check if the call stack is empty and then move tasks from the microtask or callback queues to the call stack in the correct order:

Process all tasks in the microtask queue: If the call stack is empty, the event loop checks the microtask queue first. It moves tasks from the microtask queue to the call stack until the microtask queue is empty.

Process tasks in the callback queue: Once all microtasks are handled, the event loop moves a task from the callback queue (if there’s one) to the call stack for execution.
`
// the Event Loop Works in Practice-
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve("Promise resolved").then((value) => {
  console.log(value);
});

console.log("End");