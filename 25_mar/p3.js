function flattenArray(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]