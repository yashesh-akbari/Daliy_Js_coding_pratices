// Question 1
// Write a JavaScript function that takes a string as input and returns the string with all vowels removed.

let str="naramada"
let temp="";
let temp2="";
let str1=str.toLowerCase();
for(let i=0;i<str.length;i++){
  let temp=str.slice(i,i+1);
  if(temp==="a" || temp==="e" || temp==="i" || temp==="u" || temp==="o")
  {
    continue;
  }  
  else{
    temp2=temp2+temp;
  }
}
console.log(temp2);
