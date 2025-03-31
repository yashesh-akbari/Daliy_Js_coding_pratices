// Input: "hello"
// Output: "olleh"

let arr='hello'
let temp=''

for(let i=arr.length-1;i>=0;i--){
  temp=temp+arr[i];
}
console.log("  "+temp);
