// Question 2: Check if a Given String is a Valid Anagram of Another String
// Write a JavaScript function that takes two strings as input, and returns true if the first string is a valid anagram of the second string, and false otherwise.

// Example:

// - Input: "listen", "silent"
// - Output: true

let s1="listen"
let s2="silent"

if(s1.length!==s2.length){
  console.log("This is not Anagram");
}else{
  let arr=[]
  let arr2=[]
  for(let i=0;i<s1.length;i++){
    let s=s1.slice(i,i+1);
  // console.log(s);
    arr.push(s);
    let st=s2.slice(i,i+1);
    arr2.push(st)
  }
  let string1= arr.sort();
  let string2= arr2.sort();
  for (let i = 0; i < arr.length; i++) {
    if(string1[i]!==string2[i]){
      console.log("the string is not anagram");
      break;
    }else{
      console.log("the string is anagram");
    }
  }
  console.log(arr,arr2);
}