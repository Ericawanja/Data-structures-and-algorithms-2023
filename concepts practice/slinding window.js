let values = [2, 4, 5, 3, 1, 5, 7, 1];

function maxSumOfElements(arr, p) {
  let max = 0;
  let sum = 0;
  let i = 0;
  while (i < p) {
    sum = sum + arr[i];
    console.log(sum)
    i++;
  }
  max = sum;
  while (i < arr.length) {
    // console.log(i);
    sum = sum + arr[i] - arr[i - p];
    if (sum > max) {
      max = sum;
    }
    i++;
  }
  return max;
}

console.log(maxSumOfElements(values, 2))