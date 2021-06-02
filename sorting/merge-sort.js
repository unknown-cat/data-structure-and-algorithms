const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }

  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);

  return merge(
    mergeSort(left),
    mergeSort(right),
  )
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

console.log(mergeSort(numbers));
