//1. What are some common array methods in JavaScript?
`Answer:
In JavaScript, arrays come with several built-in methods that make it easier to manipulate and work with array data.

1. Adding and Removing Elements
push(element): Adds one or more elements to the end of an array and returns the new length.
pop(): Removes the last element from an array and returns it.
unshift(element): Adds one or more elements to the beginning of an array and returns the new length.
shift(): Removes the first element from an array and returns it.

2. Finding Elements
indexOf(element): Returns the first index at which a given element can be found; returns -1 if it’s not found.
lastIndexOf(element): Returns the last index at which a given element can be found; returns -1 if it’s not found.
find(callback): Returns the first element that satisfies the provided testing function (callback).
findIndex(callback): Returns the index of the first element that satisfies the testing function; returns -1 if no elements satisfy it.
includes(element): Checks if an array includes a certain element, returning true or false.

3. Transforming Elements
map(callback): Creates a new array populated with the results of calling a provided function on every element in the array.
filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
reduce(callback, initialValue): Executes a reducer function (callback) on each element, resulting in a single output value.
forEach(callback): Executes a provided function once for each array element (does not return a new array).

4. Reordering Elements
reverse(): Reverses the order of elements in an array in place.
sort([compareFunction]): Sorts the elements of an array in place and returns the sorted array. Accepts an optional comparison function for custom sorting.

5. Concatenating and Slicing
concat(array): Merges two or more arrays to form a new array.
slice(start, end): Returns a shallow copy of a portion of an array into a new array, with the selected start and end indices.
splice(start, deleteCount, item1, item2, ...): Adds/removes items from an array. It changes the original array.

6. Checking Conditions
some(callback): Checks if at least one element in the array passes the test implemented by the provided function. Returns true or false.
every(callback): Checks if all elements in the array pass the test implemented by the provided function. Returns true or false.

7. Joining Elements
join(separator): Joins all elements of an array into a string, separated by the specified separator.`



//2. How does map() differ from forEach() in arrays?
`Answer:
The map() and forEach() methods in JavaScript are both used to iterate over an array, but they have key differences in behavior and usage:

1. Return Value
map(): Creates and returns a new array populated with the results of calling a provided function on every element in the calling array.
forEach(): Executes the provided function on each element but does not return a new array. It returns undefined.

2. Use Case
map(): Use it when you want to transform each element in an array and need a new array containing the transformed elements.
forEach(): Use it when you just want to execute a function on each array element without creating a new array (e.g., logging values, updating an external variable, etc.).

3. Immutability
map(): Does not change the original array; instead, it creates a new array.
forEach(): Does not directly modify the original array but can be used to mutate elements within it if the function alters them.

Example`
const numbers = [1, 2, 3, 4];

// Using map()
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original array is unchanged)

// Using forEach()
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);     // 10
console.log(numbers); // [1, 2, 3, 4] (original array is unchanged)



//3. Explain the filter() method. How does it work?
`Answer:
The filter() method in JavaScript creates a new array with all elements that pass a specified test implemented by a callback function. 

filter() Syntax-`
const newArray = array.filter(callback(element, index, array), thisArg);

Parameters:

`callback: A function that is called on each element of the array. It should return true to keep the element or false to exclude it from the new array.

element: The current element being processed.

index (optional): The index of the current element.

array (optional): The array on which filter() was called.

thisArg (optional): A value to use as this when executing the callback.

Return Value: A new array with the elements that passed the test. If no elements pass the test, it returns an empty array.

Original Array: The filter() method does not modify the original array.`

// Example with Objects
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 65 },
    { name: "Charlie", score: 75 }
  ];
  
  const passingStudents = students.filter(student => student.score > 70);
  
  console.log(passingStudents);



//4. What does the reduce() method do, and how is it used?
Answer:
`The reduce() method in JavaScript is used to accumulate all elements in an array into a single value based on a callback function. 

reduce() Works-
Syntax`
array.reduce(callback(accumulator, currentValue, index, array), initialValue);

Parameters:
`callback: A function to execute on each element in the array, taking four arguments:

accumulator: The accumulated value from the previous iteration (or the initial value on the first iteration).

currentValue: The current element being processed.

index (optional): The index of the current element.

array (optional): The array that reduce() is called on.

initialValue (optional): An initial value to start the accumulation. If omitted, reduce() starts with the first array element as the accumulator and processes from the second element.

Return Value: The single accumulated result after iterating through all elements.`

// Example Usage
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15



//5. How do you find the length of a string and reverse it?
`Answer:
To find the length of a string and reverse it in JavaScript, you can use the .length property and a few different methods to reverse the string.

1. Finding the Length of a String
To get the length of a string, use the .length property:`

const str = "Hello, World!";
const length = str.length;
console.log(length); // Output: 13

`2. Reversing a String
There isn’t a direct reverse() method for strings, but you can reverse a string by converting it to an array, reversing the array, and then joining it back into a string.

Method 1: Using split(), reverse(), and join()`

const stri = "Hello, World!";
const reversedStr = stri.split('').reverse().join('');
console.log(reversedStr); // Output: "!dlroW ,olleH"

`Method 2: Using a for Loop`

const str = "Hello, World!";
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr); // Output: "!dlroW ,olleH"



//6. What are template literals, and how can they be used for string manipulation?
`Answer:
Template literals, introduced in ES6 (ECMAScript 2015), provide a more powerful way to work with strings in JavaScript.

1. Syntax of Template Literals
Template literals are enclosed by backticks (`) instead of single (') or double (") quotes.`

    const name = "Mamun";
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // Output: "Hello, Mamun!"

`2. Features of Template Literals

String Interpolation-
One of the most useful features of template literals is string interpolation, which allows you to embed expressions within a string by using ${expression} syntax.`

const age = 25;
const message = `I am ${age} years old.`;
console.log(message); // Output: "I am 25 years old."

`Multi-line Strings-
Template literals allow you to create multi-line strings without using escape characters (\n).
`

const multiline = `This is a string
that spans across
multiple lines.`;
console.log(multiline);
// Output:
// This is a string
// that spans across
// multiple lines.

`Expression Evaluation-
Since you can include any JavaScript expression in ${}, template literals can evaluate functions, array indexing, and object properties directly.`

const user = { name: "Bob", age: 30 };
const welcomeMessage = `Welcome, ${user.name}. You are ${user.age} years old.`;
console.log(welcomeMessage); // Output: "Welcome, Bob. You are 30 years old."


`Tagged Template Literals-
You can also create custom functions called tag functions to process template literals. Tagged templates allow you to manipulate template strings before they’re output, which is useful for things like sanitizing input or formatting strings.`
function emphasize(strings, ...values) {
    return strings.map((str, i) => `${str}**${values[i] || ""}**`).join('');
  }
  
  const word = "exciting";
  const message = emphasize`This is a very ${word} feature.`;
  console.log(message); // Output: "This is a very **exciting** feature."
  


//7. How do you remove duplicates from an array?
`Answer:
There are several ways to remove duplicates from an array in JavaScript, depending on the requirements and JavaScript version. 

1. Using Set
A Set is a collection of unique values, so converting an array to a Set and back to an array removes duplicates.`

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

`2. Using filter() with indexOf()
This method uses filter() to keep only the first occurrence of each element.`

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

`3. Using reduce()
You can also use reduce() to accumulate unique values in an array.`

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

`4. Using forEach() with an Object or Set for Tracking
This method manually loops through the array and uses an object or Set to track unique values.`

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
const seen = new Set();

array.forEach(item => {
  if (!seen.has(item)) {
    seen.add(item);
    uniqueArray.push(item);
  }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
