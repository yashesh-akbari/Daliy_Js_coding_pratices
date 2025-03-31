// Challenge 2: Find the Longest Common Prefix
// Write a function that takes an array of strings as input and returns the longest common prefix among all strings.

// Input: [“apple”, “ape”, “april”] Output: “ap”

let arr=["arple","app","april"]
let temp1="";
for(let i=0;i<arr.length;i++){
  let temp = arr[0];
  let char=temp.slice(i,i+1);
  if(char===arr[1].slice(i,i+1)){
    temp1=temp1+char;
  }
}
console.log(temp1);



