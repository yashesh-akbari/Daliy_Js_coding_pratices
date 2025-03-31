// Question 1: Validate a Binary Search Tree (BST)
// Write a JavaScript function that takes a binary tree as input and returns true if the tree is a valid binary search tree (BST). Otherwise, return false.

// Example:

// - Input:

// 2
// / 
// 1   3

// - Output: true

// console.log("hello"); //for testing
import readline from "readline";


let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

rl.question("Enter the parent Node value:",(val1)=>{
  rl.question("Enter the second child node value:",(val2)=>{
    rl.question("Enter the thired child node value",(val3)=>{
      let arr=[];
      arr.push(val1);
      if(val2>=val1){
        arr.push(val2);
      }else{
        arr.unshift(val2);
      }
      if(val3>=val1){
        if(val3>=val2){
          arr.push(val3);
        }
        else{
          arr.unshift(val3);
        }
      }
      else{
        arr.unshift(val3);
      }
      if(arr[1]===val1){
        console.log("true");
      }
      else{
        console.log("false");
      }
    })
  })
})


