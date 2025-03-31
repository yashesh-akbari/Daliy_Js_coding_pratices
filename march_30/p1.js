// Challenge 1: Merge Two Sorted Arrays
// Write a function that takes two sorted arrays as input and returns a new sorted array containing all elements from both arrays.


function fun(arr,arr1){
  let s1=arr.sort();
let s2=arr1.sort();
// let result;
for(let i=0;i<s2.length;i++){
 s1.push(s2[i]);
}
let a=s1.sort();
console.log(a);
}
fun([1,23,2,3,4]
,[2,3,23,21,1])

function merage(arr,arr1){
return [...arr,...arr1].sort((a,b)=>a-b)
}
console.log(merage([1,23,2,3,4]
  ,[2,3,23,21,1]));

