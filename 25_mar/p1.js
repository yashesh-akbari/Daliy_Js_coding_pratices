let arr = [2, 1, 3, 1, 5, 2];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log(arr[i]);
      break;
    }
  }
}