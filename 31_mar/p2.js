// Question 2
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array.

// let arr=[1,2,3,4,5,6];

let sumofeven=(arr)=>{
  let temp=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      temp=temp+arr[i];
    }
    else{
      continue;  
    }
  }
  console.log(temp);
}
console.log(sumofeven([1,2,3,4,5,6]));