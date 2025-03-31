//Question 1: Find the First Duplicate in an Array
      // Write a JavaScript function that takes an array of integers as input and returns the first duplicate element. If no duplicates are found, return -1.

      // Example:

      // - Input: [2, 1, 3, 5, 3, 2]
      // - Output: 3
      let arr = [0, 1, 3, 5, 3, 2];
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            console.log(arr[i]);
            return;
          }
        }
      }
      // console.log(-1);