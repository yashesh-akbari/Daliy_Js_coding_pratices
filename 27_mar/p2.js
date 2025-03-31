// Question 2: Rotate an Array to the Right by a Given Number of Steps
// Write a JavaScript function that takes an array and a number of steps as input, and returns the array rotated to the right by the given number of steps.

// Example:

// - Input: [1, 2, 3, 4, 5], 2
// - Output: [4, 5, 1, 2, 3]

   // Question 2: Rotate an Array to the Right by a Given Number of Steps
      // Write a JavaScript function that takes an array and a number of steps as input, and returns the array rotated to the right by the given number of steps.

      // Example:

      // - Input: [1, 2, 3, 4, 5], 2
      // - Output: [4, 5, 1, 2, 3]
      document.querySelector("#submit-form").addEventListener("submit", (e) => {
        e.preventDefault();
        let input = document.querySelector("#context").value;
        let temp = [];
        let arr = [1, 2, 3, 4, 5];
        let arr1 = arr;
        for (let i = 0; i <= input; i++) {
          temp.push(arr[i]);
          // arr1.shift();
        }
        for (let i = 0; i <= input; i++) {
          // temp.push(arr[i]);
          arr1.shift();
          arr1.push(temp[i]);
        }

        console.log(temp, arr1);
        console.log(arr1);
      });

      // let input = 1;