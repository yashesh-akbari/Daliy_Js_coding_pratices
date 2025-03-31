// Check if an Object has a Certain Property
// Write a function that takes an object and a property name as input and returns true if the object has the property, and false otherwise.

// Example:

// Input: { name: "John", age: 30 }, "name"
// Output: true

// Input: { name: "John", age: 30 }, " occupation"
// Output: false

function hasProperty(obj, propName) {
  return obj.hasOwnProperty(propName);
}
  let obj={
    name:'John',
    age:30
  }
 console.log(hasProperty(obj,"m"));

