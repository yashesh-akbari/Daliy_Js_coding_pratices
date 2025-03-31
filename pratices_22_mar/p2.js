// task1: find the maximum
// Input: [1, 5, 3, 4, 2]
// Output: 5

//task2:in this without many change find the minmum


let arr=[-1,23,2,-13,25];
let max=0;
let min=0;

for(let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i];
  }
  if(arr[i]<min){
    min=arr[i];
  }
}
console.log(max);
console.log(min);

