// Question 1: Check if a String is a Valid Palindrome with Punctuation and Spaces
// Write a JavaScript function that takes a string as input and returns true if the string is a palindrome, ignoring punctuation and spaces. Otherwise, return false.

// Example:

// - Input: "A man, a plan, a canal: Panama"
// - Output: true

let rl=require("readline");

let userinput=rl.createInterface({
  input:process.stdin,
  output:process.stdout,
})

userinput.question("Enter a string:   ",(val)=>{
  let ans=val.replaceAll(" ","");
  let LowerCaseAns=ans.toLowerCase();
  console.log(LowerCaseAns);
  let temp=" ";
  for(let i=LowerCaseAns.length-1;i>=0;i--){
    temp=temp+LowerCaseAns[i];
  }
  console.log(temp);
  if(temp===LowerCaseAns){
    console.log(val+" is palindrom");
  }
  else{
    console.log("Not a palindrom");
  }
  userinput.close();
})


