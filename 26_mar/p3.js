// Question 2: Find the Missing Number in an Array of Consecutive Numbers
// Write a JavaScript function that takes an array of consecutive numbers as input and returns the missing number.

// Example:

// - Input: [1, 2, 3, 5, 6]
// - Output: 4

let arr=[1, 2, 3, 5, 6];
let sortedArr=arr.sort();
// log("")
let temp=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr[i+1]){
      temp.push(arr[i])
    }
}
for(j=0;j<temp.length;j++){
  let tempary=temp[j];
  if(tempary===j+1){
    continue
  }
  else{
    console.log("missing value is "+(tempary-1));
    break;
  }
}
// console.log(temp);
// console.log(sortedArr);
